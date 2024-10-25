const express = require('express');
const pool = require('./db');
const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("確認テスト")
})

app.get("/users", (req, res) => {
    pool.query("SELECT * FROM consumer", (error, results) => {//↑queryとは問い合わせの意味、つまりこの場においてdbに問い合わせ文を書く
        if(error) throw error;
        return res.status(200).json(results.rows);
    })
})

app.post ('/users/api', async (req, res) => {
    const {username, address, content} = req.body;
    console.log("Received body:", req.body); // リクエスト内容を確認
            try {
                await pool.query ('INSERT INTO consumer (username, address, content) VALUES ($1, $2, $3)' ,
                    [ username, address, content]);
                res.status(200).json({ message: 'ユーザー情報が正常に追加されました' });
            } catch (error) {
                console.error('ユーザー情報追加時のエラー:', error);
                res.status(500).json({ error: 'データベースエラー' });
            }
        });

// サーバーの起動
app.listen(port, () => {
  console.log(`こんにちは ${port}`);
});