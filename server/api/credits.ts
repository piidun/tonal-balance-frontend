import axios from 'axios';
import { H3Event } from 'h3';
const config = useRuntimeConfig();
export default async (event: H3Event) => {
  const response = await axios.get(config.public.apiBase+'/Api/Auth/credits?username=string');
  if (response.status === 200) {
    return response.data;
  } else {
    throw createError({
      statusCode: response.status,
      statusMessage: 'Unauthorized'
    });
  }
};