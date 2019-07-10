import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { connect } from 'react-redux';
import './App.css';

// Prime Components
import Nav from '../Prime/Nav/Nav';
import ProtectedRoute from '../Prime/ProtectedRoute/ProtectedRoute'

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div id="outer-container">
          <Switch>
            <ProtectedRoute
              path="/"
              component={Nav}
            />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default connect()(App);
