import { useState, useEffect } from 'react'
import axios from 'axios'

import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()

    if(persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = search === '' 
    ? persons 
    : persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter search={search}
        handleSearchChange={handleSearchChange} />

      <div>
        <h2>add a new</h2>
        <PersonForm addPerson={addPerson}
          handleNewNameChange={handleNewNameChange}
          handleNewNumberChange={handleNewNumberChange}
          newName={newName}
          newNumber={newNumber} />
      </div>

      <div>
        <h2>Numbers</h2>
        <Persons persons={filteredPersons} />
      </div>
    </div>
  )
}

export default App