const express = require('express');
const cors = require('cors'); // CORSパッケージのインポート
const pool = require('./db');
const app = express();
const port = process.env.PORT || 5002;

app.use(cors()); // CORSを有効化
app.use(express.json());

app.get("/", (_req, res) => {
    res.send("確認テスト");
});

app.get("/users", async (_req, res) => {
    try {
        const results = await pool.query("SELECT * FROM consumer");
        res.status(200).json(results.rows);
    } catch (error) {
        console.error('ユーザー情報取得エラー:', error);
        res.status(500).json({ error: 'データベースエラー' });
    }
});

app.post('/users/api', async (req, res) => {
    const { username, address, content } = req.body;
    console.log("Received body:", req.body);
    try {
        await pool.query('INSERT INTO consumer (username, address, content) VALUES ($1, $2, $3)', [username, address, content]);
        res.status(200).json({ message: 'ユーザー情報が正常に追加されました' });
    } catch (error) {
        console.error('ユーザー情報追加時のエラー:', error);
        res.status(500).json({ error: 'データベースエラー' });
    }
});

app.listen(port, () => {
    console.log(`サーバーがポート ${port} で起動しました`);
});
