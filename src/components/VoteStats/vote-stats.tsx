import css from './vote-stats.module.css'
import type { Votes } from '../../types/votes'

interface VoteStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
}

export default function VoteStats({ votes = {
    good: 0,
    neutral: 0,
    bad: 0
}, totalVotes = 0, positiveRate = 0 }: VoteStatsProps) {
    return (
        <div className={css.container}>
  <p className={css.stat}>Good: <strong>{votes.good}</strong></p>
  <p className={css.stat}>Neutral: <strong>{votes.neutral}</strong></p>
  <p className={css.stat}>Bad: <strong>{votes.bad}</strong></p>
  <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
  <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
</div>

    )
}
