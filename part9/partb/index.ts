import express from "express";
import cors from "cors";

const SERVER_PORT = 3001;
const app = express();

app.use(cors());
app.get('/api/ping', (_req, res) => {
    return res.send('pong');
});

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
})