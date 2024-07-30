// src/components/TeamMatches/index.js

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchesData()
  }

  getMatchesData = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const recentMatches = data.recent_matches
    const updatedRecentMatches = recentMatches.map(iplmatch => ({
      umpires: iplmatch.umpires,
      result: iplmatch.result,
      manOfTheMatch: iplmatch.man_of_the_match,
      id: iplmatch.id,
      date: iplmatch.date,
      venue: iplmatch.venue,
      competingTeam: iplmatch.competing_team,
      competingTeamLogo: iplmatch.competing_team_logo,
      firstInnings: iplmatch.first_innings,
      secondInnings: iplmatch.second_innings,
      matchStatus: iplmatch.match_status,
    }))
    this.setState({
      teamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      isLoading: false,
    })
  }

  render() {
    const {teamBannerUrl, latestMatchDetails} = this.state
    const {recentMatches, isLoading} = this.state
    const {gradient} = this.props
    return (
      <div
        style={{background: gradient}}
        className="team-matches-main-container"
      >
        {isLoading ? (
          <div className="loader-container" data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <LatestMatch {...latestMatchDetails} />
            <ul className="recent-matches-list">
              {recentMatches.map(recentMatchDetails => (
                <MatchCard
                  key={recentMatchDetails.id}
                  recentMatchDetails={recentMatchDetails}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
