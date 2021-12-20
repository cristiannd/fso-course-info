import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const course = [
  {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        exercises: 14,
        name: 'State of a component',
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1,
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2,
      },
    ],
  },
]

ReactDOM.render(<App course={course} />, document.getElementById('root'))
