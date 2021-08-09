class Rating {
    public static calculate(totalDays: number, workoutDays: number) {
        const percentageWorkedOut = Math.round(workoutDays / totalDays);

        if (percentageWorkedOut <= 33)
            return 1;
        else if (percentageWorkedOut <= 66)
            return 2;
        else
            return 3;
    }
}

interface ExerciseStats {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const ratingToDescription = (rating: number): string => {
    if (rating >= 0 && rating < 1.0)
        return "GET THE FUCK OUT OF BED BITCH GO";
    else if (rating >= 1.0 && rating < 2.0)
        return "Not too bad but could be better";
    else
        return "VERY NICE!";
};

const calculateExercises = (data: Array<number>): ExerciseStats => {
    const totalDays = data.length;
    const target = 1;

    let totalHours = 0, average = 0, trainingDays = 0;
    let success = false;

    // Calculate sum of hours and training days in one go
    // Also for every record determine if we've hit the target
    data.forEach((time) => {
        if (time > 0) {
            trainingDays++;
            totalHours += time;

            // Determine if we've hit the target
            success = (time >= target);
        }
    })

    // Calculate average training day
    average = totalHours / totalDays;

    // Calculate rating
    const rating = Rating.calculate(totalDays, trainingDays);

    return {
        periodLength: data.length,
        trainingDays,
        success,
        rating,
        ratingDescription: ratingToDescription(rating),
        target,
        average
    };
};

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]));