import React from 'react';

const Header = ({ courseName }) => {
  return <h2>{courseName}</h2>;
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, e) => sum + e.exercises, 0);
  return <b>total of {totalExercises} exercises</b>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((e) => (
        <Part key={e.id} part={e} />
      ))}
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
