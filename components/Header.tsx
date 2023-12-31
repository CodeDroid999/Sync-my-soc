import LinkedinLogo from './LinkedinLogo'
import NextLogo from './NextLogo'
import SupabaseLogo from './SupabaseLogo'
import TwitterLogo from './TwitterLogo'

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <div className="w-20">
          <SupabaseLogo />
        </div>
        <span className="border-l rotate-60 h-6" />
        <div className="w-20 bg-white pl-1">
          <TwitterLogo />
        </div>
        <span className="border-l rotate-60 h-6" />
        <div className="w-20 bg-white pl-1">
          <LinkedinLogo />
        </div>
      </div>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        The fastest way to manage your social accounts ...
      </p>
      <div className="w-full text-white p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />

    </div>
  )
}
