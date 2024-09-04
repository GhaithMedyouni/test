import { NextResponse } from 'next/server';
import { db } from '@/lib/db'; // Ajustez l'import selon votre configuration

export async function GET(req: Request) {
  try {
    // Récupérer les données depuis la base de données
    const data = await db.statistique.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data:', error.message);
      return NextResponse.json({ message: `Error fetching data: ${error.message}` }, { status: 500 });
    } else {
      console.error('Unexpected error:', error);
      return NextResponse.json({ message: 'An unexpected error occurred.' }, { status: 500 });
    }
  }
}
