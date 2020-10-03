import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
	return (
		<h1>{props.course}</h1>
	)
}

const Part = (props) => {
	return (
		<p>{props.name} {props.number}</p>
	)
}

const Content = (props) => {
	return (
		<>
			<Part name={props.p1} number={props.e1}/>
			<Part name={props.p2} number={props.e2}/>
			<Part name={props.p3} number={props.e3}/>
		</>

	)
}

const Total = (props) => {
	return (
		<p>
			Number of exercises {props.one+props.two+props.three}
		</p>
	)
}

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
		<>
			<Header course={course} />
			<Content p1={part1.name} p2={part2.name} p3={part3.name}
        e1={part1.exercises} e2={part2.exercises} e3={part3.exercises} />
			<Total one={part1.exercises} two={part2.exercises} three={part3.exercises} />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))

