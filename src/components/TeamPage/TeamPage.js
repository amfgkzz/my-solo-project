import React, { Component } from 'react';
import { connect } from 'react-redux';

class TeamPage extends Component {

    componentDidMount() {
        this.fetchUserTeam();
    }

    fetchUserTeam = () => {
        this.props.dispatch({ type: 'GET_USER_TEAM' });
    }

    render() {
        return (
            <>
                <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre>
            </>
        )
    }
}

const mapStateToRedux = reduxState => ({
    reduxState,
});

export default connect(mapStateToRedux)(TeamPage);