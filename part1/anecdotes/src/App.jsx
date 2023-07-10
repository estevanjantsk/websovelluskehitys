import { useState } from 'react'

const App = () => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({})

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const generateRandom = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    
    if(random !== selected) {
      return random
    }

    return generateRandom()
  }

  const getAnecdoteWithHighestVote = () => {
    let maxKey = null
    let maxValue = Number.NEGATIVE_INFINITY
  
    for (let key in points) {
      if (points[key] > maxValue) {
        maxValue = points[key]
        maxKey = key
      }
    }
  
    return maxKey
  }

  const handleVote = () => {
    if(isNaN(points[selected])) {
      setPoints({
        ...points,
        [selected]: 1
      })
      return
    }
    setPoints({
      ...points,
      [selected]: points[selected] + 1
    })
    
  }

  const handleGetRandomAnecdote = () => {
    const random = generateRandom()
    setSelected(random)
  }

  const mostVoted = getAnecdoteWithHighestVote()
  
  return (
    <div>
      <div>
        <h2>Anecdote of the day</h2>
        <p>
          {anecdotes[selected]}
        </p>
        <p>
          has {points[selected] ? points[selected] : 0} votes
        </p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleGetRandomAnecdote}>next anecdote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        {mostVoted && anecdotes[mostVoted]}
      </div>
    </div>
  )
}

export default App