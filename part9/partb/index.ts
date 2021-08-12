import express from "express";

const SERVER_PORT = 3001;
const app = express();

app.get('/ping', (_req, res) => {
    return res.send('pong');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
})