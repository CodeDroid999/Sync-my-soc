import { createClient } from '@/utils/supabase/server'
import ConnectSupabaseSteps from '@/components/ConnectSupabaseSteps'
import SignUpUserSteps from '@/components/SignUpUserSteps'
import Header from '@/components/Header'
import AboutButton from '@/components/AboutButton'
import StepsGlass from '@/components/StepsGlass'
import AuthButton from '@/components/AuthButton'
import DeployButton from '@/components/DeployButton'

export const dynamic = 'force-dynamic'

const canInitSupabaseClient = () => {
  try {
    createClient()
    return true
  } catch (e) {
    return false
  }
}

export default async function Dashboard() {
  const isSupabaseConnected = canInitSupabaseClient()

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center ">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-white">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton />
          <div className="flex space-x-2">
            {isSupabaseConnected && <AuthButton />}
          </div>
        </div>
      </nav>
      <footer className="w-full border-t border-t-foreground/10 p-2 flex justify-center text-center text-md bg-white  text-blue-900  space-x-2 align-center">
        <p className="text-lg pt-2">Powered by</p>
        <DeployButton />
      </footer>
    </div>
  )
}
