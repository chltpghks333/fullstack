import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'
import './index.css';

const Header = ({text}) => {
    return (
        <h1> {text}</h1>
    )
}

const Button = ({onClick,text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

const Statistics = ({good,neutral,bad}) => {

    const all = good+neutral+bad
    let average = 0
    let positive = 0

    if(all!==0) {
        average = (good-bad)/all
        positive = (good/all)*100
    }

    if(good===0 && neutral===0 && bad===0) {
        return <h2>No feedback given</h2>
    }else{
        return(
            <table>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={positive} />
            </table>
        )
    }
}
const Statistic = ({text,value}) => {
    if(text.localeCompare("positive")===0){
        return (
            <tr>
            <td>{text}</td>
            <td>{value}%</td>
            </tr>
        )
    }
    return (
        <tr>
        <td>{text}</td>
        <td>{value}</td>
        </tr>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const goodClick = () => setGood(good+1)
    const neutralClick = () => setNeutral(neutral+1)
    const badClick = () => setBad(bad+1)

    return (
        <div>
        <Header text="give feedback" />
        <Button onClick={goodClick} text="good" />
        <Button onClick={neutralClick} text="neutral" />
        <Button onClick={badClick} text="bad" />
        <Header text="statistics" />
        <Statistics good={good} neutral={neutral} bad={bad} />

        </div>
    )
}

const anecdotes = [

]

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
