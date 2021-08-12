import express from "express";

import calculateBmi from './bmiCalculator';

const PORT = 3001;
const app = express();

app.get('/hello', (_req, res) => {
    return res.send('Hello full stack!');
});

app.get('/bmi', (req, res) => {
    const params = req.query;
    if (!('weight' in params) || !('height' in params))
        return res.status(400).json({ error: 'BMI calculation requires height and weight'});

    const weight = Number(params.weight);
    const height = Number(params.height);

    if (isNaN(weight) || isNaN(height))
        return res.status(400).json({ error: 'Parameters are invalid numbers' });

    const bmi = calculateBmi(height, weight);
    return res.send(bmi);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});