import * as XLSX from 'xlsx';

export const importGoogleSheetData = async (sheetUrl: string) => {
  const response = await fetch(sheetUrl);
  const data = await response.arrayBuffer();
  
  const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
  const sheetName = workbook.SheetNames[0]; // Nom de la première feuille
  const sheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(sheet);

  return jsonData;
};
