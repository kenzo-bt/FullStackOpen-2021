import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
   name: 'Fundamentals of React',
   exercises: 10
  }
  const part2 = {
   name: 'Using props to pass data',
   exercises: 7
  }
  const part3 = {
   name: 'State of a component',
   exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]}/>
      <Total exercises={[part1.exercises, part2.exercises, part3.exercises]} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}
    </p>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

export default App
