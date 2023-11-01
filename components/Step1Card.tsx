import LinkedinLogo from "./LinkedinLogo";
import SupabaseLogo from "./SupabaseLogo";
import TwitterLogo from "./TwitterLogo";
import SignupButton from './SignupButton';

export default function Step1() {
    return (
        <pre className="bg-foreground/5 flex space-x-2 rounded-md p-8 my-8 relative">
            <div className="w-20 h-6">
                <SignupButton />
            </div>

        </pre>
    )
}
