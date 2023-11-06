import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';

const options = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  // Add other options as needed
};

export default (req, res) => {
  try {
    // Log the request for debugging
    console.log('Incoming request:', req);

    // Execute NextAuth with the specified options
    return NextAuth(req, res, options);
  } catch (error) {
    // Handle and log errors
    console.error('Error in Facebook sign-in route:', error);
    // Return an error response or redirect to an error page
    res.status(500).json({ error: 'An error occurred during sign-in.' });
  }
};
