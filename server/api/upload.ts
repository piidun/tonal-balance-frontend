import axios from "axios";
import { H3Event } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readFormData(event);
  const config = useRuntimeConfig(event);

  const query = getQuery(event);
  const username = query.username;
  const mixfactor = query.mixfactor;

    const response = await axios.post(`http://${config.public.apiBase}/api/FileUpload/upload?username=${username}&mixfactor=${mixfactor}`, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

    if (response.status === 200 || response.status === 201) {
      return response.data;
    } else {
      throw createError({
        statusCode: response.status,
        statusMessage: "Failed",
      });
    }
});
