// pages/auth/facebook-sign-in.ts

import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const accessToken = String(formData.get('access_token'));
  const supabase = createClient();

  // You can use the `accessToken` to sign in with Facebook. You will need to handle the Facebook authentication flow.

  const { user, session, error } = await supabase.auth.signIn({
    provider: 'facebook',
    access_token: accessToken,
    // You may add other options if needed
  });

  if (error || !user || !session) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=Could not authenticate user`,
      {
        // a 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    );
  }

  return NextResponse.redirect(requestUrl.origin, {
    // a 301 status is required to redirect from a POST to a GET route
    status: 301,
  });
}
