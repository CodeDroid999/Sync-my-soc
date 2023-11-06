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

export default async function PrivacyPolicy() {
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

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-2">
            <span className="font-bold text-5xl mb-4">Privacy Policy</span>
          </h2>
          <p className="text-lg">
            Effective Date: December 20, 2023
          </p>
          <p className="text-lg">
            This Privacy Policy describes how Oletai (referred to as "we", "us", or "our") collects, uses, and discloses your personal information when you use our services. By accessing or using our services, you consent to the practices described in this Privacy Policy.
          </p>
          <h3 className="text-2xl font-semibold mt-4">Information We Collect</h3>
          <p className="text-lg">
            We collect information that you provide directly when you use our services. This may include your name, email address, and any other information you choose to provide.
          </p>
          <h3 className="text-2xl font-semibold mt-4">How We Use Your Information</h3>
          <p className="text-lg">
            We use your information for various purposes, including providing and improving our services, contacting you, and responding to your requests.
          </p>
          <h3 className="text-2xl font-semibold mt-4">Information Sharing</h3>
          <p className="text-lg">
            We do not share your personal information with third parties unless required by law or to protect our rights, privacy, safety, or property.
          </p>
          <h3 className="text-2xl font-semibold mt-4">Security</h3>
          <p className="text-lg">
            We take reasonable measures to protect your personal information, but no method of transmission over the internet is 100% secure.
          </p>
          <h3 className="text-2xl font-semibold mt-4">Changes to Privacy Policy</h3>
          <p className="text-lg">
            We may update this Privacy Policy from time to time, and we will notify you of any changes.
          </p>
        </main>

      </div>


      <footer className="w-full border-t border-t-foreground/10 p-2 flex justify-center text-center text-md bg-white  text-blue-900  space-x-2 align-center">
        <p className="text-lg pt-2">Powered by</p>
        <DeployButton />
      </footer>
    </div>
  )
}