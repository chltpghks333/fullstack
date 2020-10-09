import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryInfo from './CountryInfo'
import CountryList from './CountryList'

const SearchResult = ({ keyword, onClick }) => {
    const [ locations, setLocations ] = useState([]) 
    // initialize locations state with data fetched from the server (REST API in this case)
    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setLocations(response.data)
            })
    },[])
    
    let results = '' 
    if (keyword==='') { // if there is no keyword..
        results = 'type a keyword for search...'
    }else { // if any keyword is presented, search for the countries..
        const keyword_lower = keyword.toLowerCase()
        // searches include every possible countries containing keyword
        const searches = locations.filter(location => {
            const location_lower = location.name.toLowerCase()
            return location_lower.includes(keyword_lower)
        })

        // if searches have more than 10 results, tell user there're too many 
        if(searches.length>10) {
            results = 'Too many matches, specify another filter'
        }else if(searches.length===1){ // if there's only one search, show its info
            results = <CountryInfo country={searches[0]} />
        }else if(searches.length===0){
            results = 'No matching result... search again'
        }
        else {
            results = <CountryList searches={searches} onClick={onClick}/>
        }
    }

    return (
        <div>{results}</div>
    )
}

export default SearchResult
