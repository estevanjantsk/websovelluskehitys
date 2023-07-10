import { useState } from 'react'
import { Button } from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

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
      <div>
        <h2>give feedback</h2>
        <div>
          <Button title="good"
            handleClick={handleGood} />
          <Button title="neutral"
            handleClick={handleNeutral} />
          <Button title="bad"
            handleClick={handleBad}/>
        </div>
      </div>
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
    </div>
  )
}

export default App