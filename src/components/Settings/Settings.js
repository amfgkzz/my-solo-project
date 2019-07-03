import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {

    state = {
        inEditMode: false,
        leagueName: '',
        leagueNumbers: '',
        leagueType: '',
        teamName: '',
    }

    componentDidMount() {
        this.fetchUserData();
    }

    fetchUserData = () => {
        this.props.dispatch({ type: 'GET_USER_LEAGUE' });
        this.props.dispatch({ type: 'GET_USER_TEAM' });
        this.props.dispatch({ type: 'FETCH_USER' });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('working!');
    }

    render() {
        let reduxState = this.props.reduxState;
        if (this.state.inEditMode) {
            return (
                <>
                    <h2>Settings</h2>

                    {reduxState.createdLeague.map((league, i) => (
                        <form key={i} onSubmit={this.handleSubmit} onReset={() => { this.setState({ inEditMode: !this.state.inEditMode }) }}>
                            <button type="reset">Cancel</button>
                            <button type="submit">Save</button>
                            <br/>
                            <label>League Name</label>
                            <input placeholder={league.league_name} />
                            <br />
                            <label>League Numbers</label>
                            <input placeholder={league.league_numbers} />
                            <br />
                            <label>League Type</label>
                            <input placeholder={league.league_type} />
                        </form>
                    ))}

                    <br />

                    {reduxState.createdTeam.map((team, i) => (
                        <form key={i}>
                            <label>Team Name</label>
                            <input placeholder={team.team_name} />
                        </form>
                    ))}

                    <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre>
                </>
            )
        } else {
            return (
                <>
                    <h2>Settings</h2>

                    <button onClick={() => { this.setState({ inEditMode: !this.state.inEditMode }) }}>Edit</button>

                    {reduxState.createdLeague.map((league, i) => (
                        <form key={i}>
                            <label>League Name</label>
                            <input value={league.league_name} readOnly />
                            <br />
                            <label>League Numbers</label>
                            <input value={league.league_numbers} readOnly />
                            <br />
                            <label>League Type</label>
                            <input value={league.league_type} readOnly />
                        </form>
                    ))}

                    <br />

                    {reduxState.createdTeam.map((team, i) => (
                        <form key={i}>
                            <label>Team Name</label>
                            <input value={team.team_name} readOnly />
                        </form>
                    ))}

                    <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre>
                </>
            )
        }
    }
}

const mapStateToRedux = reduxState => ({
    reduxState,
});

export default connect(mapStateToRedux)(Settings);