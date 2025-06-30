import { useState } from 'react'
import css from './App.module.css'
import  CafeInfo  from '../CafeInfo/cafe-info'
import type { VoteType } from '../../types/votes'
import VoteOptions from '../VoteOptions/vote-options'
import VoteStats from '../VoteStats/vote-stats'
import Notifications from '../notifications/notifications'



export default function App() {

  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleVote = (vote: VoteType)  => {
    setVotes((v) => ({
      ...v,
      [vote]: v[vote] + 1,
    }));
  };

  const resetVotes = () => {
    setVotes ({good: 0, neutral: 0, bad: 0})
  }

  const totalVotes = votes.good + votes.neutral + votes.bad

  const canReset = totalVotes > 0

  const rate = totalVotes
  ? Math.round((votes.good / totalVotes) * 100)
  : 0

  return (
    <>
      <div className={css.app}>
        <CafeInfo />

        <VoteOptions
          onVote={handleVote}
          onReset={resetVotes}
            canReset={canReset} />

        {totalVotes > 0 ?
          <VoteStats
          votes={votes}
          totalVotes={totalVotes}
            positiveRate={rate} /> : <Notifications />}
        
      </div>
      </>
  )
}

