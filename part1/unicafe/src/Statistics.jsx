const Statistics = ({ bad, neutral, good }) => {

  const getTotal = () => {
    return bad + neutral + good
  }

  const calcAverage = () => {
    const total = getTotal()
    return total / 3
  }

  const calcPositive = () => {
    const total = getTotal()

    if(total === 0) {
      return 0
    }

    return (good / total) * 100
  }

  return (
    <div>
      <h2>statistics</h2>
      <div>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>all: {bad + neutral + good}</p>
        <hr />
        <p>average: { calcAverage() }</p>
        <p>positive: { calcPositive() }%</p>
      </div>
    </div>
  )
}

export { Statistics }
