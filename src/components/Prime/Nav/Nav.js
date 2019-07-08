import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = (props) => (
  <div className="nav">
    <div className="nav-right">
      {/* <Link className="nav-link" to="/home">
        Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not
        {props.user.id ? 'Home' : 'Login / Register'}
      </Link> */}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Link className="nav-link" to="/home">
            Home
          </Link>
          <br/>
          <Link className="nav-link" to="/Players">
            Players
          </Link>
          <br />
          <Link className="nav-link" to="/UserTeamPage">
            Team
          </Link>
          <br />
          {/* FIX: create a league is going to be a link from another page, ie not on nav bar */}
          <Link className="nav-link" to="/CreateLeague">
            Create a League
          </Link>
          <br />
          <Link className="nav-link" to="/CreateTeam">
            Create a Team
          </Link>
          <br />
          <Link className="nav-link" to="/Settings">
            Settings
          </Link>
        </>
      )}
    </div>
  </div>
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
