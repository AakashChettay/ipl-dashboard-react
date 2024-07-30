import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'
import {teamGradientColors} from './constants'
import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/team-matches/:id"
          render={props => {
            const {id} = props.match.params
            const gradient =
              teamGradientColors[id] ||
              'linear-gradient(to right, #1e293b, #5755a7)'
            return <TeamMatches {...props} gradient={gradient} />
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
