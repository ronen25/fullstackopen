import React from 'react';

import Header from './Header';
import Part from './Part';

const Course = ({course}) => {
    const parts = course.parts.map((item) => <Part key={item.id} part={item} />);
    return (
        <div>
        <Header name={course.name} />
        {parts}
        </div>
    );
};

export default Course;