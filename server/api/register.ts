import axios from "axios";
import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig(event);
  const body = await readBody(event); // Expecting { username: "string", password: "string" }

  try {
    const response = await axios.post(
      `http://${config.public.apiBase}/Api/Auth/register`,
      body
    );
    
    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      throw createError({
        statusCode: response.status,
        statusMessage: "Registration failed",
      });
    }
  } catch (error) {
    throw createError({
      statusCode: error.response ? error.response.status : 500,
      statusMessage: error.message || "An error occurred",
    });
  }
});
