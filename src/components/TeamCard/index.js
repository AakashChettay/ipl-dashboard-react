import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl, id} = teamDetails
  return (
    <Link className="ipl-team-link" to={`/team-matches/${id}`}>
      <div className="team-card">
        <img alt={`${name}`} src={teamImageUrl} className="team-logo-style" />
        <p className="team-name-heading">{name}</p>
      </div>
    </Link>
  )
}

export default TeamCard
