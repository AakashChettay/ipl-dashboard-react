import './index.css'

const LatestMatch = props => {
  const {competingTeam, date, venue, result, competingTeamLogo} = props
  const {firstInnings, secondInnings, manOfTheMatch, umpires} = props
  return (
    <div className="latest-match-details-container">
      <div className="det-one-row-con">
        <div className="match-details-one">
          <p className="lm-competing-team-title">{competingTeam}</p>
          <p className="lm-date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result-style">{result}</p>
        </div>
        <img
          alt={`latest match ${competingTeam}`}
          className="latest-match-competing-team-logo-row"
          src={competingTeamLogo}
        />
      </div>
      <img
        alt={`latest match ${competingTeam}`}
        className="latest-match-competing-team-logo"
        src={competingTeamLogo}
      />
      <div className="match-details-two">
        <h1 className="lm-details-two-heading">First Innings</h1>
        <p className="lm-details-two-para">{firstInnings}</p>
        <h1 className="lm-details-two-heading">Second Innings</h1>
        <p className="lm-details-two-para">{secondInnings}</p>
        <h1 className="lm-details-two-heading">Man Of The Match</h1>
        <p className="lm-details-two-para">{manOfTheMatch}</p>
        <h1 className="lm-details-two-heading">Umpires</h1>
        <p className="lm-details-two-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
