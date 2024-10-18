import { z } from "zod"

export const validation = z.object({
    name: z
        .string()
        .min(4, "4文字以上で入力してください"),
    email: z
        .string()
        .min(4, "4文字以上で入力してください")
        .email("正しいEmailを入力してください"),  
    content: z
        .string()
        .min(10, "10文字以上で入力してください")
})