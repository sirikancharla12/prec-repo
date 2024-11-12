import { Context, Next } from "hono";
import { Jwt } from "hono/utils/jwt";

export async function authMiddleware(c: Context, next: Next) {
    const JWT_TOKEN = c.env.JWT_PASS;

    try {
        const authHeader = c.req.header("Authorization");
        if (!authHeader || typeof authHeader !== "string") {
            return c.body("Authorization header missing or invalid", 401);
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return c.body("Token missing", 401);
        }

        const decoded = await Jwt.verify(token, JWT_TOKEN);
        if (decoded) {
            c.set("userId", decoded.userId);
            await next();
        } 
        else {
            return c.body("Unauthorized: Invalid token", 401);
        }
    } catch (error) {
        return c.body("unauthorized", 401);
    }
}
