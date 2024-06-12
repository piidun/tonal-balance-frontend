import axios from "axios";
import { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event);
  const response = await axios.get(
    "http://" + config.public.apiBase + "/Api/Auth/credits?username=string"
  );
  if (response.status === 200) {
    return response.data;
  } else {
    throw createError({
      statusCode: response.status,
      statusMessage: "Unauthorized",
    });
  }
});
