import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserData extends Component{

    componentDidMount() {
        console.log('hit!');
    }

    render(){
        return(
            <>
            <h1>User Data (league and team)</h1>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(UserData);