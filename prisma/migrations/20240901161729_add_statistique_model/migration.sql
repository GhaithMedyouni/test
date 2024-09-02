-- CreateTable
CREATE TABLE "Statistique" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userActif" INTEGER NOT NULL,
    "vente" DOUBLE PRECISION NOT NULL,
    "revenus" DOUBLE PRECISION NOT NULL,
    "nouveauxInscrits" INTEGER NOT NULL,

    CONSTRAINT "Statistique_pkey" PRIMARY KEY ("id")
);
