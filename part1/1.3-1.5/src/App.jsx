const Header = ({course}) => {
  return(
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
  return (
    <div>
      <Part1 part1={part1} exercises1={exercises1} />
      <Part2 part2={part2} exercises2={exercises2} />
      <Part3 part3={part3} exercises3={exercises3} />
    </div>
  )
}

const Part1 = (props) => {
  return(
    <p>{props.part1} {props.exercises1}</p>
  )
}

const Part2 = (props) => {
  return(
    <p>{props.part2} {props.exercises2}</p>
  )
}

const Part3 = (props) => {
  return(
    <p>{props.part3} {props.exercises3}</p>
  )
}

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return(
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = {
  name : 'Half Stack application development',
  parts : [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}
  return (
    <div>
      <Header course={course.name} />
      <Content part1={course.parts[0].name} exercises1={course.parts[0].exercises}
       part2={course.parts[1].name} exercises2={course.parts[1].exercises} 
       part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
      <Total exercises1={course.parts[0].exercises} 
      exercises2={course.parts[1].exercises} 
      exercises3={course.parts[2].exercises} />
    </div>
  )
}

export default App
