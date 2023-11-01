import LinkedinLogo from "./LinkedinLogo";
import SupabaseLogo from "./SupabaseLogo";
import TwitterLogo from "./TwitterLogo";

export default function Step2() {
    return (
        <pre className="bg-foreground/5 flex flex-col space-x-2 rounded-md p-8 my-8 relative">
            <div className="w-100 mb-2">
                <p>Add your social media accounts to monitor your online presence influence. </p>
            </div>
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
        </pre>
    )
}
