import React from 'react'

const Persons = ({ personsToShow }) => {

    return (
        <h4>
            {personsToShow.map(person => 
            <p key={person.name}>{person.name} {person.number}</p>)}
        </h4>
    )
}

export default Persons
