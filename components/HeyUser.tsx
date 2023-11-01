import { createClient } from '@/utils/supabase/server';
import DeployButton from './DeployButton';

export default async function HeyUser() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return (
      <div className="flex flex-col items-center gap-4 text-blue-900 text-center align-center justify-center pt-5 bg-white">
        <div className=" flex align-center justify-center">
          <DeployButton />
        </div>
        <div className="hey-user mb-3">
          Hey, {user.email}!
        </div>
      </div>
    );
  } else {
    // You can add a loading indicator or handle the case where there's no user data.
    return (
      <div className="flex flex-col items-center gap-4 text-blue-900 text-center align-center justify-center pt-5 bg-white">
        <div className="logo">
          <DeployButton />
        </div>
        <div className="hey-user mb-3">
          Loading ...
        </div>
      </div>
    );
  }
}
