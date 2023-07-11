import { useState } from 'react'

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

      <div>
        <div>
          filter shown with: <input value={search}
            onChange={handleSearchChange} />
        </div>
      </div>

      <div>
        <h2>add a new</h2>
        <form onSubmit={addPerson}>
          <div>
            name: <input value={newName}
              onChange={handleNewNameChange} />
          </div>
          <div>
            number: <input value={newNumber}
              onChange={handleNewNumberChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>

      <div>
        <h2>Numbers</h2>
        <ul>
          {filteredPersons.map(note => 
            <li key={note.id}>{note.name} {note.number}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App