import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {

    state = {
        inEditMode: false,
        leagueName: '',
        leagueNumbers: '8',
        leagueType: 'Standard',
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

    handleChange = (propertyName) => (e) => {
        this.setState({
            [propertyName]: e.target.value,
        });
    }

    render() {
        let reduxState = this.props.reduxState;
        if (this.state.inEditMode) {
            return (
                <>
                    <h2>Settings</h2>

                    <pre>
                        {JSON.stringify(this.state, null, 2)}
                    </pre>

                    <form onSubmit={this.handleSubmit} onReset={() => { this.setState({ inEditMode: !this.state.inEditMode }) }}>

                        <button type="reset">Cancel</button>
                        <button type="submit">Save</button>

                        <br />

                        <label>League Name</label>
                        <input onChange={this.handleChange('leagueName')} placeholder={reduxState.createdLeague[0].league_name} />

                        <br />

                        <label>Leageu Numbers</label>
                        <select onChange={this.handleChange('leagueNumbers')} defaultValue="8">
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                        </select>

                        <br />

                        <label>League Type</label>
                        <select onChange={this.handleChange('leagueType')} defaultValue="Standard">
                            <option>Standard</option>
                            <option>PPR</option>
                        </select>

                    </form>


                    <br />

                    <form >
                        <label>Team Name</label>
                        <input placeholder={reduxState.createdTeam[0].team_name} />
                    </form>

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