import { useState } from 'react'

const Header = ({text}) => {
  return (
    <h2>{text}</h2>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  
  if (good || neutral || bad) {
    return (
      <>
      <table>
        <tbody>
          <StatisticLine text="good" value={good}></StatisticLine>
          <StatisticLine text="neutral" value={neutral}></StatisticLine>
          <StatisticLine text="bad" value={bad}></StatisticLine>
          <StatisticLine text="all" value={total}></StatisticLine>
          <StatisticLine text="average" value={average}></StatisticLine>
          <StatisticLine text="positive" value={positive + " %"}></StatisticLine>
        </tbody>
      </table>
      </>
    )
  } else {
    return (
      <div>
        No feedback given
      </div>
    )
  }
}

const StatisticLine = ({text, value}) => {
    return (
      <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
      </>
    )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const countAvg = (avgCount, totalCount) => {
    return avgCount/totalCount; 
  }
  
  const handleBtnGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood)

    let totalCount = updatedGood + neutral + bad;
    setTotal(totalCount)

    let avgCount = updatedGood*1 + neutral*0 + bad*-1;
    setAverage(countAvg(avgCount, totalCount))

    let positiveCount = updatedGood * 100 / totalCount
    setPositive(positiveCount)

  }
  const handleBtnNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral)

    let totalCount = good + updatedNeutral + bad;
    setTotal(totalCount)

    let avgCount = good*1 + updatedNeutral*0 + bad*-1;
    setAverage(countAvg(avgCount, totalCount))

    let positiveCount = good * 100 / totalCount
    setPositive(positiveCount)

  }
  const handleBtnBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad)

    let totalCount = good + neutral + updatedBad;
    setTotal(totalCount)

    let avgCount = good*1 + neutral*0 + updatedBad*-1;
    setAverage(countAvg(avgCount, totalCount))

    let positiveCount = good * 100 / totalCount
    setPositive(positiveCount)
  }
  


  return (
    <div>
      <Header text="Give feedback"></Header>
      <Button handleClick={handleBtnGood} text="good"></Button>
      <Button handleClick={handleBtnNeutral} text="neutral"></Button>
      <Button handleClick={handleBtnBad} text="bad"></Button>

      <Header text="Statistics"></Header>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}></Statistics>
    </div>
  )
}

export default App