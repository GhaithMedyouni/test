/*
  Warnings:

  - A unique constraint covering the columns `[date,userActif]` on the table `Statistique` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Statistique" ALTER COLUMN "revenus" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "Statistique_date_userActif_key" ON "Statistique"("date", "userActif");
