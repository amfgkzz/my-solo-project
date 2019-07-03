import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserData extends Component {

    componentDidMount() {
        this.fetchUserData();
    }

    fetchUserData = () => {
        this.props.dispatch({ type: 'GET_USER_LEAGUE' });
        this.props.dispatch({ type: 'GET_USER_TEAM' });
        this.props.dispatch({ type: 'FETCH_USER' });
    }

    render() {
        let reduxState = this.props.reduxState;
        if (reduxState.user.league_id === null) {
            return (
                <>
                    <h3>No data</h3>
                    <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre>
                </>
            )
        } else if (reduxState.user.team_id === null) {
            return (
                <>
                    <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre>
                    <h3>User Data (league only)</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>League Name</th>
                                <th>League Numbers</th>
                                <th>League Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reduxState.createdLeague.map((league, i) => (
                                <tr key={i}>
                                    <td>{league.league_name}</td>
                                    <td>{league.league_numbers}</td>
                                    <td>{league.league_type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )
        } else if (reduxState.user.league_id && reduxState.user.team_id) {
            return (
                <>
                    <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre>
                    <h3>User Data (league and team)</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>League Name</th>
                                <th>League Numbers</th>
                                <th>League Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reduxState.createdLeague.map((league, i) => (
                                <tr key={i}>
                                    <td>{league.league_name}</td>
                                    <td>{league.league_numbers}</td>
                                    <td>{league.league_type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    <table>
                        <thead>
                            <tr>
                                <th>Team Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reduxState.createdTeam.map((team, i) => (
                                <tr key={i}>
                                    <td>{team.team_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )
        }
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(UserData);