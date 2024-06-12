import axios from "axios";
import { H3Event } from "h3";
export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event);
  console.log(config.public.apiBase);
  const response = await axios.post(
    "http://" + config.public.apiBase + "/Api/Auth/login",
    body
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
