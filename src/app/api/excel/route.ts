import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import { db } from '@/lib/db';

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser to handle file uploads manually
  },
};

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';
    const boundary = `--${contentType.split('boundary=')[1]}`;

    if (!boundary) {
      throw new Error('Invalid boundary in content-type header');
    }

    const chunks = [];
    for await (const chunk of req.body) {
      chunks.push(chunk);
    }
    const bodyBuffer = Buffer.concat(chunks);

    let start = bodyBuffer.indexOf(boundary) + boundary.length;
    let end = bodyBuffer.indexOf(boundary, start) - 4;
    
    const part = bodyBuffer.slice(start, end);

    const disposition = part.slice(0, part.indexOf('\r\n\r\n')).toString();
    if (disposition.includes('name="file";')) {
      const fileBuffer = part.slice(part.indexOf('\r\n\r\n') + 4);

      // Process the Excel file to JSON
      const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      // Save the data to the database
      await saveToDatabase(jsonData);

      // Return success message
      return NextResponse.json({ message: 'Data imported and saved successfully' }, { status: 200 });
    } else {
      throw new Error('File not found in form-data');
    }
  } catch (error) {
    console.error('Error processing file:', error.message || error);
    return NextResponse.json({ message: `Error processing file: ${error.message}` }, { status: 500 });
  }
}

// Utility function to save JSON data to the database
async function saveToDatabase(jsonData: any[]) {
  try {
    for (const item of jsonData) {
      const date = new Date(item.date);
      await db.statistique.upsert({
        where: {
          date_userActif: {
            date,
            userActif: item.userActif,
          },
        },
        update: {
          vente: item.vente,
          revenus: item.revenus,
          nouveauxInscrits: item.nouveauxInscrits,
        },
        create: {
          date,
          userActif: item.userActif,
          vente: item.vente,
          revenus: item.revenus,
          nouveauxInscrits: item.nouveauxInscrits,
        },
      });
    }
  } catch (error) {
    throw new Error(`Error saving data to the database: ${error.message}`);
  }
}
