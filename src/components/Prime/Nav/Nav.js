import React from 'react';
import { Link as Active } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';

// Sidebar and css
import { slide as Menu } from 'react-burger-menu';
import styles from './styles';

// Material ui
import Link from '@material-ui/core/Link';

const Nav = (props) => (

  <Menu className="menu" width={200} disableAutoFocus styles={styles} noOverlay disableCloseOnEsc isOpen customCrossIcon={false} customBurgerIcon={false} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>

      <Link className="active-link" component={Active} to="/home">Home</Link>

      <br/>

      <Link className="active-link" component={Active} to="/Players">Players</Link>

      <br/>

      <Link className="active-link" component={Active} to="/UserTeamPage">Team</Link>

      <br/>

      {/* FIX: create a league is going to be a Link from another page, ie not on nav bar */}
      <Link className="active-link" component={Active} to="/CreateLeague">Create a League</Link>

      <br/>

      <Link className="active-link" component={Active} to="/CreateTeam">Create a Team</Link>

      <br/>

      <Link className="active-link" component={Active} to="/Settings">Settings</Link>

  </Menu>

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
