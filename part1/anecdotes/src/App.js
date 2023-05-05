import { useState } from 'react'

const Header = ({text}) => {
  return(
  <h2>{text}</h2>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
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
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [max, setMax] = useState(0)
  // let indexMax = 0;
  // console.log(votes)
  // console.log(max)

  const handleClickNext = () => {
    let newAnecdote = parseInt(Math.random() * anecdotes.length);
    setSelected(newAnecdote)
    return newAnecdote
  }

  const handleClickVote = () => {
    const copyVotes = [...votes]
    copyVotes[selected] += 1
    setVotes(copyVotes)
    findTopAnecdoteIndex(copyVotes)
  }

  const findTopAnecdoteIndex = (copyVotes) => {
    let maxVotes = Math.max(...copyVotes);
    let indexMax = copyVotes.indexOf(maxVotes);
    setMax(indexMax)
  }

  
  return (
    <>
    <Header text="Anecdote of the day"></Header>
    <div>{anecdotes[selected]}</div>

    <div>has {votes[selected]} votes</div>
    <Button handleClick={handleClickVote} text="vote"></Button>
    <Button handleClick={handleClickNext} text="next anecdote"></Button>

    <Header text="Anecdote with most votes"></Header>
    <div>{anecdotes[max]}</div>
    <div>has {votes[max]} votes</div>
    </>


  )
}

export default App