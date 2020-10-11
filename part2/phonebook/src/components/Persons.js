import React from 'react'

const Persons = ({ personsToShow, onClick }) => {

    return (
        <h4>
            {personsToShow.map(person => 
            <p key={person.name}>
            {person.name} {person.number}
            <button name={person.name} id={person.id} type='button' onClick={onClick}>delete</button>
            </p>)}
        </h4>
    )
}

export default Persons
