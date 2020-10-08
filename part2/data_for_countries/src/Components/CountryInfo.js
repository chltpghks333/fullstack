import React from 'react'

const CountryInfo = ({country}) => {
    return (
        <>
            <h1>{country.name}</h1>
            <h4>capital {country.capital}</h4>
            <h4>population {country.population}</h4>
            <h1>Languages</h1>
            {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            <img src={country.flag} alt='country flag' width='200' height='200'></img>

        </>

    )
}

export default CountryInfo
