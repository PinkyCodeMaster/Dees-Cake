import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from '@/db/schema';
import postgres from "postgres";

export const connection = postgres(process.env.DATABASE_URL!);

export const db = drizzle(connection, { schema, logger: true, });

export type db = typeof db;

export default db;