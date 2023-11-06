import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";
import FacebookProvider from "next-auth/providers/facebook";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const requestUrl = new URL(request.url);
  const formData = await request.formData();
  const email = String(formData.get("email"));
  const password = String(formData.get("password"));
  const username = String(formData.get("username")); // Collect the username from the form
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
      data: { username }, // Include the username in the data object
    },
  });

  if (error) {
    return NextResponse.redirect(
      `${requestUrl.origin}/login?error=Could not authenticate user`,
      {
        // A 301 status is required to redirect from a POST to a GET route
        status: 301,
      }
    );
  }

  return NextResponse.redirect(
    `${requestUrl.origin}/login?message=Check email to continue sign-in process`,
    {
      // A 301 status is required to redirect from a POST to a GET route
      status: 301,
    }
  );
}
