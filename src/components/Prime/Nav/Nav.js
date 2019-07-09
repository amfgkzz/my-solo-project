import React from 'react';
import { Link as Active } from 'react-router-dom';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import styles from './styles';
import './Nav.css';
import Link from '@material-ui/core/Link';

const Nav = (props) => (

  <Menu className="menu" width={100} disableAutoFocus styles={styles} noOverlay disableCloseOnEsc isOpen customCrossIcon={false} customBurgerIcon={false} pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>

      <Link component={Active} to="/home">Home</Link>

      <Link component={Active} to="/Players">Players</Link>

      <Link component={Active} to="/UserTeamPage">Team</Link>

      {/* FIX: create a league is going to be a Link from another page, ie not on nav bar */}
      <Link component={Active} to="/CreateLeague">Create a League</Link>

      <Link component={Active} to="/CreateTeam">Create a Team</Link>

      <Link component={Active} to="/Settings">Settings</Link>

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
