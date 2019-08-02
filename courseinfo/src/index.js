import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => <h1>{props.course}</h1>;

const Part = (props) => (
  <p>
    {props.data.name} {props.data.exercises}
  </p>
);

const Content = (props) => (
  <div>
    <Part data={props.parts[0]} />
    <Part data={props.parts[1]} />
    <Part data={props.parts[2]} />
  </div>
);

const Total = (props) => {
  const exercises = props.parts.map((part) => part.exercises);
  return (
    <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
      },
      {
        name: 'State of a component',
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
