const express = require('express');
const pool = require('./db');
const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("確認テスト");
});

app.get("/users", (req, res) => {
    pool.query("SELECT * FROM consumer", (error, results) => {
        if (error) throw error;
        return res.status(200).json(results.rows);
    });
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

// ユーザー情報の更新
app.put('/users/api/:id', async (req, res) => {
    const { id } = req.params;
    const { username, address, content } = req.body;
    try {
        await pool.query(
            'UPDATE consumer SET username = $1, address = $2, content = $3 WHERE id = $4',
            [username, address, content, id]
        );
        res.status(200).json({ message: 'ユーザー情報が正常に更新されました' });
    } catch (error) {
        console.error('ユーザー情報更新時のエラー:', error);
        res.status(500).json({ error: 'データベースエラー' });
    }
});

// ユーザー削除
app.delete('/users/api/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM consumer WHERE id = $1', [id]);
        res.status(200).json({ message: 'ユーザーが正常に削除されました' });
    } catch (error) {
        console.error('ユーザー削除時のエラー:', error);
        res.status(500).json({ error: 'データベースエラー' });
    }
});

// サーバーの起動
app.listen(port, () => {
    console.log(`こんにちは ${port}`);
});
