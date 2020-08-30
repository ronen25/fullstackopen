import React from 'react';

const TotalExercises = ({ parts }) => {
    const totalEx = parts
        .map(part => part.exercises)
        .reduce((acc, cur) => acc + cur);

    return (
        <div>
            <p>
                <b>
                    Total of {totalEx} exercises
                </b>
            </p>
        </div>
    );
}

export default TotalExercises;
