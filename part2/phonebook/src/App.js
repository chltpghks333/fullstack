import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/personService'
import Notification from './components/Notification'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newSearch, setNewSearch ] = useState('')
    const [ message, setMessage ] = useState(null)

    useEffect(() => {
        personService.getAll()
            .then(response => {
                setPersons(response.data)
            })
    },[])

    const addPerson = (event) => {
        event.preventDefault()
        const newPerson = {
            name: newName,
            number: newNumber
        }
        const duplicate = persons.find(person => person.name===newName) 

        if(duplicate!==undefined){
            if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
                const updatePerson = { ...duplicate, number: newNumber }
                personService.update(duplicate.id, updatePerson) 
                    .then(response => {
                        setPersons(persons.map(person => person.id===duplicate.id ? response.data:person))
                        setMessage(`Updated ${newName}'s phone number`)
                        setTimeout(() => {
                            setMessage(null)
                        }, 2000)
                    })
                    .catch(error => {
                        setMessage(`Information of ${newName} has already been removed from server`)
                        setTimeout(() => {
                            setMessage(null)
                        }, 2000)
                    })

            }
        }else{
            personService.create(newPerson)
                .then(response => {
                    setPersons(persons.concat(response.data))
                    setMessage(`Added ${newName}`)
                    setTimeout(() => {
                        setMessage(null)
                    }, 2000)
                })
        }
    }

    const deletePerson = (event) => {
        const name = event.target.name
        const id = event.target.id
        if(window.confirm(`Delete ${name}?`)) {
            personService.erase(id)
                .then(response => {
                    setPersons(persons.filter(person => id!=person.id))
                })
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

    return (
        <div>
            <h2>PhoneBook</h2>
            <Notification msg={message} />
            <Filter newSearch={newSearch} onChange={handleSearchChange} />
            <h2>add a new</h2>
            <PersonForm onSubmit={addPerson} states={states} handlers={handlers} />
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow} onClick={deletePerson}/>

        </div>
    )
}
export default App
