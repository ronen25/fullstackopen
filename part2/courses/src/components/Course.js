import React from 'react';

import Header from './Header';
import Part from './Part';
import TotalExercises from './TotalExercises';

const Course = ({course}) => {
    const parts = course.parts.map((item) => <Part key={item.id} part={item} />);
    return (
        <div>
        <Header name={course.name} />
        {parts}
        <TotalExercises parts={course.parts} />
        </div>
    );
};

export default Course;