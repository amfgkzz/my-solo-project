import React from 'react';
import { connect } from 'react-redux';
import UserData from '../User-data/User-data';
import { AppBar } from '@material-ui/core';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <>
    <AppBar position="relative" color="secondary" style={{boxShadow: 'none'}}>
      Home
    </AppBar>

    <UserData history={props.history}/>
  </>
);

export default connect()(UserPage);
