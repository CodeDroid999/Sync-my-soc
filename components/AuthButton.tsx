import { createClient } from '@/utils/supabase/server'
import Link from 'next/link'
import AboutButton from './AboutButton'
import DashboardButton from './DashboardButton'

export default async function AuthButton() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return user ? (
    <div className="flex items-center gap-4 text-blue-900">
      <div className="flex space-x-2">
        <AboutButton/>
        <DashboardButton/>
      <form action="/auth/sign-out" method="post">
        <button className="text-white py-2 px-4 rounded-md no-underline bg-blue-800  hover:text-blue-900 hover:bg-blue-300">
          Logout
        </button>
      </form>
      </div>
      Hey, {user.email}!
      
    </div>
  ) : (
    <Link
      href="/login"
      className="text-white py-2 px-4 rounded-md no-underline bg-blue-800 hover:bg-blue-300 hover:text-blue-900 "
    >
      Login
    </Link>
  )
}
