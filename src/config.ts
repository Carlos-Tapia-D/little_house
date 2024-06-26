import { registerAs } from "@nestjs/config";
export default registerAs('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PASSWORD,
        },
        apiKey: process.env.API_KEY
    }
})