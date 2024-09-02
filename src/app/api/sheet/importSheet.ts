import type { NextApiRequest, NextApiResponse } from 'next';
import { db} from '@/lib/db'; // Assurez-vous que ce chemin est correct
import { importGoogleSheetData } from '@/lib/importSheet';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { sheetUrl } = req.body;

      if (!sheetUrl) {
        return res.status(400).json({ message: 'Sheet URL is required' });
      }

      // Récupérer les données depuis Google Sheets
      const sheetData = await importGoogleSheetData(sheetUrl);

      // Transformer les données en objets JSON
      const jsonData = sheetData.map((row: any) => ({
        date: new Date(row.date),
        userActif: parseInt(row.userActif, 10),
        vente: parseInt(row.vente, 10),
        revenus: parseFloat(row.revenus),
        nouveauxInscrits: parseInt(row.nouveauxInscrits, 10),
      }));

      // Insérer les données dans la base de données
      for (const item of jsonData) {
        await db.statistique.upsert({
          where: {
            date_userActif: {
              date: item.date,
              userActif: item.userActif,
            },
          },
          update: {
            vente: item.vente,
            revenus: item.revenus,
            nouveauxInscrits: item.nouveauxInscrits,
          },
          create: {
            date: item.date,
            userActif: item.userActif,
            vente: item.vente,
            revenus: item.revenus,
            nouveauxInscrits: item.nouveauxInscrits,
          },
        });
      }

      res.status(200).json({ message: 'Data imported successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error importing data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
