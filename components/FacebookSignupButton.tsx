import Link from 'next/link';

function SignUpWithFacebookButton() {
  return (
    <Link href="/auth/facebook-sign-in">
      <button className="bg-blue-100 text-orange-500">Sign Up with Facebook</button>
    </Link>
  );
}

export default SignUpWithFacebookButton;
