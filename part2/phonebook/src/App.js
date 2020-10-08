import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newSearch, setNewSearch ] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }

        const duplicates = persons.filter(person => person.name===newName) 

        if(duplicates.length>0){
            window.alert(`${newName} is already added to phonebook`)
        }else{
            setPersons(persons.concat(personObject))
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleSearchChange = (event) => {
        setNewSearch(event.target.value) 
    }

    const personsToShow = persons.filter(person => {
        const x = person.name.toLowerCase()
        const y = newSearch.toLowerCase()
        return x.includes(y)
    })
    const states = {
        name: newName,
        number: newNumber
    }
    const handlers = {
        name: handleNameChange,
        number: handleNumberChange
    }
    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data) 
            })

    },[])


    return (
        <div>
            <h2>PhoneBook</h2>
            <Filter newSearch={newSearch} onChange={handleSearchChange} />
            <h2>add a new</h2>
            <PersonForm onSubmit={addPerson} states={states} handlers={handlers} />
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow}/>

        </div>
    )
}
export default App
