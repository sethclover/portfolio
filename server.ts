import { serve } from "https://deno.land/std@0.223.0/http/server.ts";
import { serveFile } from "https://deno.land/std@0.223.0/http/file_server.ts";

const handler = async (req: Request): Promise<Response> => {
    const url = new URL(req.url);
    const filepath = url.pathname === "/" ? "/index.html" : url.pathname;
    try {
        const file = await serveFile(req, `./public${filepath}`);
        return file;
    } catch {
        return new Response("Not Found", { status: 404 });
    }
};

console.log("Server running on http://localhost:8000");
await serve(handler, { port: 8000 });