const calculateBmi = (height: number, mass: number): string => {
    const bmi = mass / Math.pow(height / 100, 2);

    if (bmi < 16.0)
        return "Underweight (Severe thinness)";
    else if (bmi >= 16.0 && bmi <= 16.9)
        return "Underweight (Moderate thinness)";
    else if (bmi >= 17.0 && bmi <= 18.4)
        return "Underweight (Mild thinness)";
    else if (bmi >= 18.5 && bmi <= 24.9)
        return "Normal range";
    else if (bmi >= 25.0 && bmi <= 29.9)
        return "Overweight (Pre-obese)";
    else if (bmi >= 30.0 && bmi <= 34.9)
        return "Obese (Class I)";
    else if (bmi >= 35.0 && bmi <= 39.9)
        return "Obese (Class II)";
    else
        return "Obese (Class III)";
};

// Check commandline args
if (process.argv.length != 4) {
    throw new Error('Usage: bmiCalculator HEIGHT WEIGHT');
}

const height = parseInt(process.argv[2]);
const weight = parseInt(process.argv[3]);

console.log(calculateBmi(height, weight));
