import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises2: 7,
  }

  const part3 = {
    exercises3: 14,
    name: 'State of a component',
  }
  
  return (
    <div>
      <Header course={course} />
      <Content
        name1={part1.name}
        name2={part2.name}
        name3={part3.name}
        exercises1={part1.exercises1}
        exercises2={part2.exercises2}
        exercises3={part3.exercises3}
      />
      <Total
        exercises1={part1.exercises1}
        exercises2={part2.exercises2}
        exercises3={part3.exercises3}
      />
    </div>
  )
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} exercises={props.exercises1} />
      <Part part={props.part2} exercises={props.exercises2} />
      <Part part={props.part3} exercises={props.exercises3} />
    </>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
