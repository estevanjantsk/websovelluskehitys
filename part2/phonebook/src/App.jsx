import { useState } from 'react'

import { Filter } from './components/Filter'
import { PersonForm } from './components/PersonForm'
import { Persons } from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

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