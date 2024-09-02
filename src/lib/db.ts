
// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Déclaration globale pour éviter la création multiple de PrismaClient
const globalForPrisma = global as unknown as { prisma: PrismaClient };

// Création d'une instance PrismaClient
export const prisma = globalForPrisma.prisma || new PrismaClient();

// Pour éviter la création de plusieurs instances en développement
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;



export const db = prisma;