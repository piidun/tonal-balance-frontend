import axios from 'axios';
import { H3Event } from 'h3';

export default async (event: H3Event) => {
  const body = await readBody(event);
  const response = await axios.post('http://localhost:5179/Api/Auth/login', body);

  if (response.status === 200) {
    return response.data;
  } else {
    throw createError({
      statusCode: response.status,
      statusMessage: 'Unauthorized'
    });
  }
};