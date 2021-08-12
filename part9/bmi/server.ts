import express from "express";

const PORT = 3001;
const app = express();

app.get('/hello', (_req, res) => {
    return res.send('Hello full stack!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});