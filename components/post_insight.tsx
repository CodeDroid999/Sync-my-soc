import axios from 'axios';

const accessToken = 'YOUR_USER_ACCESS_TOKEN'; // Obtain this after user authentication
const postId = 'POST_ID_TO_RETRIEVE_INSIGHTS_FOR';

async function getPostInsights() {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v12.0/${postId}/insights`,
      {
        params: {
          metric: 'post_impressions,post_engagements', // Add more metrics as needed
          access_token: accessToken,
        },
      }
    );

    const insightsData = response.data.data;
    console.log('Post Insights:', insightsData);
  } catch (error) {
    console.error('Error retrieving post insights:', error.response.data);
  }
}

getPostInsights();
