import React from 'react';
import { Link as Active, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

// Koua's Components
import PlayerList from '../../player-list/player-list';
import CreateLeague from '../../CreateLeague/CreateLeague';
import CreateTeam from '../../CreateTeam/CreateTeam';
import TeamPage from '../../TeamPage/TeamPage';
import Settings from '../../Settings/Settings';
import UserPage from '../../UserPage/UserPage';

// Sidebar and css
import { slide as Menu } from 'react-burger-menu';
import styles from './styles';

// Material ui
import Link from '@material-ui/core/Link';

const Nav = (props) => (
  <>

    <Menu className="menu" width={200} disableAutoFocus styles={styles} noOverlay disableCloseOnEsc isOpen customCrossIcon={false} customBurgerIcon={false} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>

      <Link className="active-link" component={Active} to="/home">
      <i className="material-icons">home</i>
        Home
      </Link>

      <br />

      <Link className="active-link" component={Active} to="/UserTeamPage">
      <i className="fas fa-football-ball"></i>
      Team
      </Link>

      <br />

      <Link className="active-link" component={Active} to="/Players">
      <i className="material-icons">group</i>
      Free Agency
      </Link>

      <br />

      {/* FIX: create a league is going to be a Link from another page, ie not on nav bar */}
      <Link className="active-link" component={Active} to="/CreateLeague">Create a League</Link>

      <br />

      <Link className="active-link" component={Active} to="/CreateTeam">Create a Team</Link>

      <br />

      <Link className="active-link" component={Active} to="/Settings">
      <i className="material-icons">settings</i>
      Settings
      </Link>

      <br />

      <LogOutButton />

    </Menu>

    <div className="views">
      <Switch>

        <Route
          exact
          path="/home"
          component={UserPage}
        />
        <Route
          exact
          path="/CreateLeague"
          component={CreateLeague}
        />
        <Route
          exact
          path="/CreateTeam"
          component={CreateTeam}
        />
        <Route
          exact
          path="/UserTeamPage"
          component={TeamPage}
        />
        <Route
          exact
          path="/Players"
          component={PlayerList}
        />
        <Route
          exact
          path="/Settings"
          component={Settings}
        />

      </Switch>
    </div>

  </>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
