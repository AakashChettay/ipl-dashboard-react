import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {competingTeamLogo, competingTeam} = recentMatchDetails
  const {result, matchStatus} = recentMatchDetails
  const resultClass = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="match-card-container">
      <img
        alt={`competing team ${competingTeam}`}
        src={competingTeamLogo}
        className="team-logo"
      />
      <p className="team-title">{competingTeam}</p>
      <p className="detailed-result">{result}</p>
      <p className={`short-result ${resultClass}`}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
