import { useState } from 'react'
import { Button } from './Button'
import { Statistics } from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

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
      <Statistics bad={bad}
        good={good}
        neutral={neutral} />
    </div>
  )
}

export default App