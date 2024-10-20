import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client';
import * as z from 'zod';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const QuestionSchema = z.object({
    name: z.string().min(1, '名前は必須です'),
    email: z.string().email('有効なメールアドレスを入力してください'),
    content: z.string().min(1, 'お問い合わせ内容は必須です'),
});

app.post('/api/submit', async (req: Request, res: Response) => {
    const body = req.body;

    const result = QuestionSchema.safeParse(body);
    if (!result.success) {
        return res.status(400).json({ error: '検証エラー' });
    }

    const { name, email, content } = body;

    try {
        const question = await prisma.question.create({
            data: {
                name,
                email,
                content,
            },
        });
        return res.status(200).json({ message: 'データが保存されました！', question });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'データベースエラー' });
    }
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
