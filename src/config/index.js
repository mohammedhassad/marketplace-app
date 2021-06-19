import { config } from 'dotenv';

const { parsed } = config();

export const {
  PORT = 5000,
  NODE_ENV,
  MONGODB_PASSWORD,
  MONGODB_URI,
  LOCAL_DB,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  JWT_COOKIE_EXPIRES_IN,
  IN_PROD = NODE_ENV === 'production',
  BASE_URL = BASE_URL || `http://localhost:${PORT}`,
} = parsed;
