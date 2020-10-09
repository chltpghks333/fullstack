import React from 'react'
import './App.css'
import { useState } from 'react'
import SearchForm from './Components/SearchForm'
import SearchResult from './Components/SearchResult'


const App = () => {
    const [ input, setInput ] = useState('')

    const handleInput = (event) => {
        setInput(event.target.value) // control input field
    }

    const handleClick = (event) => {
        setInput(event.target.name)
    }

    return (
        <div>
            <SearchForm keyword={input} handler={handleInput}/>
            <SearchResult keyword={input} onClick={handleClick}/>
        </div>
    )
}

export default App;
