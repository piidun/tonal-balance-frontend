import axios from "axios";
import { H3Event } from "h3";

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event);
    const query = getQuery(event);
    const filename = query.filename;

    if (!filename) {
        throw createError({
            statusCode: 400,
            statusMessage: "Filename is required",
        });
    }

    try {
        const response = await axios.get(`http://${config.public.apiBase}/api/FileUpload/download/${filename}`, { responseType: 'arraybuffer' });

        if (response.status === 200 || response.status === 201) {
            event.res.setHeader('Content-Type', response.headers['content-type']);
            event.res.setHeader('Content-Disposition', `attachment; filename=${filename}`);
            return response.data;
        } else {
            throw createError({
                statusCode: response.status,
                statusMessage: "Failed to download file",
            });
        }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message,
        });
    }
});
