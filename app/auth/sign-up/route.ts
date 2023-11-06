import { createClient } from '@/utils/supabase/server';
import { NextApiResponse, NextApiRequest } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const requestUrl = new URL(req.url, 'http://localhost');
    const formData = new URLSearchParams(await req.text());
    const email = formData.get('email') || '';
    const password = formData.get('password') || '';
    const username = formData.get('username') || ''; // Collect the username from the form
    const supabase = createClient();

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${requestUrl.origin}/auth/callback`,
          data: { username }, // Include the username in the data object
        },
      });

      if (error) {
        res.writeHead(301, {
          Location: `${requestUrl.origin}/login?error=Could not authenticate user`,
        });
        res.end();
      } else {
        res.writeHead(301, {
          Location: `${requestUrl.origin}/login?message=Check email to continue sign-in process`,
        });
        res.end();
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
