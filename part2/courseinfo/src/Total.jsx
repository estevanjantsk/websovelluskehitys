const Total = ({ parts }) => {
  const total = parts.map((part) => part.exercises).reduce((sum, exercise) => sum + exercise, 0)

  return <b>total of exercises {total}</b>
}

export { Total }