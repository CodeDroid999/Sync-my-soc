import Link from 'next/link';

function SignUpWithFacebookButton() {
    return (
        <Link href="/auth/facebook">
            <button>Sign Up with Facebook</button>
        </Link>

    );
}

export default SignUpWithFacebookButton;
