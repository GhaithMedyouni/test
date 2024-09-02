/*
  Warnings:

  - You are about to alter the column `vente` on the `Statistique` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `revenus` on the `Statistique` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Statistique" ALTER COLUMN "vente" SET DATA TYPE INTEGER,
ALTER COLUMN "revenus" SET DATA TYPE INTEGER;
