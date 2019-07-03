import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../Prime/LogOutButton/LogOutButton';
import UserData from '../User-data/User-data';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, {props.user.username}!
    </h1>
    <p>Your ID is: {props.user.id}</p>
    <UserData />
    <br />
    <LogOutButton className="log-in" />
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(UserPage);
