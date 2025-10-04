import z from "zod/v4"

const envSchema = z.object({
    VITE_BACKEND_URL: z.string().nonempty()
})


export const env = envSchema.parse(process.env)