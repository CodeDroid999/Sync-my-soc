import { createBrowserClient } from '@supabase/ssr';

export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  
  // Access Facebook App details from environment variables
  const facebookAppId = process.env.FACEBOOK_CLIENT_ID;
  const facebookAppSecret = process.env.FACEBOOK_SECRET;

  const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

  return {
    supabase,
    facebookAppId,
    facebookAppSecret,
  };
};
