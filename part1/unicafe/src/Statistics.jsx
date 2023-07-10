import { StatisticLine } from './StatisticLine'

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

  const total = getTotal()

  return (
    <div>
      <h2>statistics</h2>

      {total === 0  ? <div>No feedback given</div> : <div>
        <StatisticLine name="good"
          value={good} />
        <StatisticLine name="neutral"
          value={neutral} />
        <StatisticLine name="bad"
          value={bad} />
        <StatisticLine name="all"
          value={total} />
        <hr />
        <StatisticLine name="average"
          value={calcAverage()} />
        <StatisticLine name="positive"
          value={`${calcPositive()}%`} />
      </div>}

      
    </div>
  )
}

export { Statistics }
