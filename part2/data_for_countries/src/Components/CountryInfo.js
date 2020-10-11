import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY
const CountryInfo = ({country}) => {
    const [ weather, setWeather ] = useState('')
    useEffect(() => {
        axios
            .get('http://api.weatherstack.com/current?access_key='
            +api_key
            +'&query='
            +country.name)
            .then(response => 
                setWeather(response.data.current)
            )
    },[country.name])

    return (
        <>
            <h1>{country.name}</h1>
            <h4>capital {country.capital}</h4>

            <h4>population {country.population}</h4>
            <h1>Spoken Languages</h1>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt='country flag' width='200' height='200'></img>
            <h1>Weather in {country.capital} </h1>
            <h4>temperature: {weather.temperature} Celcius</h4>
            <img src={weather.weather_icons} alt='weather img' width='200' height='200'></img>
            <h4>wind:{weather.wind_speed} mph direction {weather.wind_dir}</h4> 
        </>
    )
}

export default CountryInfo
