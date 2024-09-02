import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Adjust the import based on your setup

export async function GET(req: Request) {
  try {
    // Fetch data from the database
    const data = await db.statistique.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error.message || error);
    return NextResponse.json({ message: `Error fetching data: ${error.message}` }, { status: 500 });
  }
}