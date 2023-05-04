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

const Statistics = ({text, value}) => {
  return (
    <div>
      <span>{text} </span> 
      <span>{value}</span>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
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
      <Statistics text="good" value={good}></Statistics>
      <Statistics text="neutral" value={neutral}></Statistics>
      <Statistics text="bad" value={bad}></Statistics>
      <Statistics text="all" value={total}></Statistics>
      <Statistics text="average" value={average}></Statistics>
      <Statistics text="positive" value={positive + " %"}></Statistics>
    </div>
  )
}

export default App