const Person = ({ note }) => {
  return (
    <li>{note.name} {note.number}</li>
  )
}

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map(note => <Person key={note.id}
        note={note} />)}
    </ul>
  )
}

export { Persons }