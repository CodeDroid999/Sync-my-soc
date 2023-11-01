import { createClient } from '@/utils/supabase/server';

export default async function HeyUser() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <div className="items-center gap-4 text-blue-900 text-right">
        Hey, {user.email}!
      </div>
    );
  } else {
    // You can add a loading indicator or handle the case where there's no user data.
    return (
      <div className="items-center gap-4 text-blue-900 text-center">
        Loading...
      </div>
    );
  }
}
