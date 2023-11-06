import Link from 'next/link';

function SignUpWithFacebookButton() {
  return (
    <button
    formAction="/auth/sign-up"
    className="border bg-blue-600 hover:bg-blue-900 border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
  >
    Sign Up
  </button>
  );
}

export default SignUpWithFacebookButton;
