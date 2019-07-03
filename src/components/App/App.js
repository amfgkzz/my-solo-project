import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

// Prime Components
import Nav from '../Prime/Nav/Nav';
import ProtectedRoute from '../Prime/ProtectedRoute/ProtectedRoute'
import UserPage from '../UserPage/UserPage';

// Koua's Components
import PlayerList from '../player-list/player-list';
import CreateLeague from '../CreateLeague/CreateLeague';
import CreateTeam from '../CreateTeam/CreateTeam';
import Settings from '../Settings/Settings';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            <ProtectedRoute
              exact
              path="/CreateLeague"
              component={CreateLeague}
            />
            <ProtectedRoute
              exact
              path="/CreateTeam"
              component={CreateTeam}
            />
            <ProtectedRoute
              exact
              path="/Players"
              component={PlayerList}
            />
            <ProtectedRoute
              exact
              path="/Settings"
              component={Settings}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect()(App);
