import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryInfo from './Components/CountryInfo'
import SearchList from './Components/SearchList'


const App = () => {

    const [ input, setInput ] = useState('')
    const [ results, setResults ] = useState('')
    const [ locations, setLocations ] = useState([]) 

    const handleChange = (event) => {
        setInput(event.target.value)

        const input_lower = event.target.value.toLowerCase()

        const search = locations.filter(location => {
            const location_lower = location.name.toLowerCase()
            return location_lower.includes(input_lower)
        })
        if(search.length>10) {
            setResults('Too many matches, specify another filter')
        }else if(search.length===1){
            setResults(<CountryInfo country={search[0]} />)
        }
        else {
            setResults(<SearchList search={search} onClick={showClicked}/>)
        }
    }

    const showClicked = (event) => {
        const name = event.target.id
        const country = locations.filter(location => {
            const location_lower = location.name.toLowerCase()
            return location_lower.localeCompare(name.toLowerCase()) === 0
        })
        setResults(<CountryInfo country={country[0]} />)
    }
    // fetch data from restAPI and use the data to initialize list of places
    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setLocations(response.data)
            })
    },[])


    return (
        <div>
            <p>find countries <input value={input} onChange={handleChange}/></p>
            <div>{results}</div>
        </div>
    )
}

export default App;
