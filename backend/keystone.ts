import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import { User } from './schema/User';

const dbURL = process.env.DATABASE_URL;
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: dbURL
  },
  lists: createSchema({
    User
  }),
  ui: {
    isAccessAllowed: () => true
  }
});
