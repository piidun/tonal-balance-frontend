import axios from 'axios';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    const userId = body.user_id;
    const credits = body.credits;
    console.log(credits)
    console.log(userId)
    // Call the external API to add credits
    const response = await axios.post('http://localhost:5179/api/Auth/addcredits', {
      username: userId,
      creditsPurchased: credits
    });

    if (response.data && response.data.message === 'Credits added successfully.') {
      return { status: 'success' };
    } else {
      throw new Error('Failed to add credits.');
    }
  } catch (error: any) {
    event.res.statusCode = 500;
    return {
      error: error.message
    };
  }
});
