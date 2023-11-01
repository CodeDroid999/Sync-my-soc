
async function signInWithFacebook() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'facebook',
  });

  if (error) {
    console.error(error);
    // Handle the error, e.g., display an error message to the user.
  } else {
    // User is successfully signed in with Facebook.
    console.log('Signed in with Facebook', user);
    // You can redirect the user or perform any other actions here.
  }
}
