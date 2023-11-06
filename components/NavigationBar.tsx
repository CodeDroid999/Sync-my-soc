import DeployButton from '../components/DeployButton'
import AuthButton from '../components/AuthButton'
import { createClient } from '@/utils/supabase/server'

export const dynamic = 'force-dynamic'

const canInitSupabaseClient = () => {
    try {
        createClient()
        return true
    } catch (e) {
        return false
    }
}

export default async function NavBar() {
    const isSupabaseConnected = canInitSupabaseClient()

    return (
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 bg-white">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
                <DeployButton />
                <div className="flex space-x-2">
                    {isSupabaseConnected && <AuthButton />}
                </div>
            </div>
        </nav>

    )
}