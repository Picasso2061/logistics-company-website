import { PrismaClient } from "@prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

declare global {
  var __prisma: PrismaClient | undefined;
}

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const db = globalThis.__prisma || new PrismaClient({ adapter, log: ["error"] });

if (process.env.NODE_ENV !== "production") globalThis.__prisma = db;
