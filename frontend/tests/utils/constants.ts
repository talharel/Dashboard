import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });
export const FRONTEND_URL = process.env.FRONTEND_URL;
export const BACKEND_URL = process.env.BACKEND_URL;