import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';
import { db } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get('content-type') || '';
    const boundary = contentType.includes('boundary=') ? `--${contentType.split('boundary=')[1]}` : null;

    if (!boundary) {
      throw new Error('Invalid boundary in content-type header');
    }

    const reader = req.body?.getReader();
    const chunks: Uint8Array[] = [];

    if (reader) {
      let done = false;
      while (!done) {
        const { value, done: readerDone } = await reader.read();
        if (value) {
          chunks.push(value);
        }
        done = readerDone;
      }
    } else {
      throw new Error('Request body is not readable');
    }

    const bodyBuffer = Buffer.concat(chunks);

    const start = bodyBuffer.indexOf(boundary) + boundary.length;
    const end = bodyBuffer.indexOf(boundary, start) - 4;

    if (start === -1 || end === -1) {
      throw new Error('Unable to parse the body');
    }

    const part = bodyBuffer.slice(start, end);

    const disposition = part.slice(0, part.indexOf('\r\n\r\n')).toString();
    if (disposition.includes('name="file";')) {
      const fileBuffer = part.slice(part.indexOf('\r\n\r\n') + 4);

      const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);

      await saveToDatabase(jsonData);

      return NextResponse.json({ message: 'Data imported and saved successfully' }, { status: 200 });
    } else {
      throw new Error('File not found in form-data');
    }
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error processing file:', err.message);
      return NextResponse.json({ message: `Error processing file: ${err.message}` }, { status: 500 });
    } else {
      console.error('Unexpected error:', err);
      return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
    }
  }
}

// Fonction utilitaire pour enregistrer les données JSON dans la base de données
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
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Error saving data to the database: ${err.message}`);
    } else {
      throw new Error('An unexpected error occurred while saving data to the database.');
    }
  }
}
