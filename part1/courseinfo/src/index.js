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
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	return (
		<>
			<Header course={course} />	
			<Content p1={part1} p2={part2} p3={part3} e1={exercises1} e2={exercises2} e3={exercises3} />
			<Total one={exercises1} two={exercises2} three={exercises3} />
		</>
	)
}
	
ReactDOM.render(<App />, document.getElementById('root'))

