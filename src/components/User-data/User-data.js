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
        if (this.props.reduxState.user.league_id === null) {
            return (
                <>
                    <h3>Create a League and Start Playing Today!</h3>
                    {/* <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre> */}
                </>
            )
        } else if (this.props.reduxState.user.team_id === null) {
            return (
                <>
                    {/* <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre> */}
                    <h3>{ this.props.reduxState.createdLeague.length >= 1 ? this.props.reduxState.createdLeague[0].league_name : "No League"}</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>League Name</th>
                                <th>League Numbers</th>
                                <th>League Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.reduxState.createdLeague.map((league, i) => (
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
        } else if (this.props.reduxState.user.league_id && this.props.reduxState.user.team_id) {
            return (
                <>
                    {/* <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre> */}

                    <h3>{ this.props.reduxState.createdLeague.length >= 1 ? this.props.reduxState.createdLeague[0].league_name : "No League"}</h3>

                    <br />

                    <h3>{ this.props.reduxState.createdTeam.length >= 1 ? this.props.reduxState.createdTeam[0].team_name : "No Team"}</h3>

                </>
            )
        }
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(UserData);