import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID || process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_SECRET || process.env.FACEBOOK_APP_SECRET,
    }),
  ],
  // Other options, callbacks, etc.
});
