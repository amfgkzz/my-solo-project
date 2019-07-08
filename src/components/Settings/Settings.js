import React, { Component } from 'react';
import { connect } from 'react-redux';

class Settings extends Component {

    state = {
        inEditMode: false,
        editObject: {
            leagueName: '',
            leagueNumbers: '8',
            leagueType: 'Standard',
            teamName: '',
        }
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
        const league = this.props.reduxState.createdLeague[0];
        const team = this.props.reduxState.createdTeam[0];
        if (this.state.editObject.leagueName === '' && this.state.editObject.teamName === '') {
            this.setState({
                inEditMode: !this.state.inEditMode,
                editObject: {
                    ...this.state.editObject,
                    leagueName: league.league_name,
                    teamName: team.team_name,
                }
            }, () => {
                this.props.dispatch({
                    type: 'UPDATE_LEAGUE_AND_TEAM',
                    payload: { ...this.state.editObject, league_id: league.id, team_id: team.id }
                });
            });
        } else if (this.state.editObject.teamName === '') {
            this.setState({
                inEditMode: !this.state.inEditMode,
                editObject: {
                    ...this.state.editObject,
                    teamName: team.team_name,
                }
            }, () => {
                this.props.dispatch({
                    type: 'UPDATE_LEAGUE_AND_TEAM',
                    payload: { ...this.state.editObject, league_id: league.id, team_id: team.id }
                });
            });
        } else if (this.state.editObject.leagueName === '') {
            this.setState({
                inEditMode: !this.state.inEditMode,
                editObject: {
                    ...this.state.editObject,
                    leagueName: league.league_name,
                }
            }, () => {
                this.props.dispatch({
                    type: 'UPDATE_LEAGUE_AND_TEAM',
                    payload: { ...this.state.editObject, league_id: league.id, team_id: team.id }
                });
            });
        } else {
            this.setState({
                inEditMode: !this.state.inEditMode,
            }, () => {
                this.props.dispatch({
                    type: 'UPDATE_LEAGUE_AND_TEAM',
                    payload: { ...this.state.editObject, league_id: league.id, team_id: team.id }
                });
            });
        }
    }

    handleChange = (propertyName) => (e) => {
        this.setState({
            editObject: {
                ...this.state.editObject,
                [propertyName]: e.target.value,
            }
        });
    }

    handleDeleteTeam = (e) => {
        this.props.dispatch({ type: 'DELETE_USER_TEAM', payload: this.props.reduxState.user });
    }

    // FIX: Add ability to delete league
    // handleDeleteLeague = (e) => {
    //     this.props.dispatch({ type: 'DELETE_USER_LEAGUE', payload: this.props.reduxState.user });
    // }

    render() {
        let reduxState = this.props.reduxState;
        if (this.state.inEditMode) {
            return (
                <>
                    <h2>Settings</h2>

                    <form onSubmit={reduxState.createdTeam.length >= 1 ? this.handleSubmit : () => { this.setState({ inEditMode: !this.state.inEditMode }) }}
                        onReset={() => { this.setState({ inEditMode: !this.state.inEditMode }) }}>
                        <button type="reset">Cancel</button>
                        <button type="submit">Save</button>
                        {
                            reduxState.createdLeague.length >= 1
                                ?
                                <>
                                    <br />

                                    <label>League Name</label>

                                    <input onChange={this.handleChange('leagueName')} placeholder={reduxState.createdLeague[0].league_name} />

                                    <br />

                                    <label>League Numbers</label>

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

                                    {/* FIX: add ability to delete league
                                    <button onClick={this.handleDeleteLeague}>Delete League</button> */}
                                </>
                                :
                                <></>
                        }

                        <br />
                        <br />

                        {
                            reduxState.createdTeam.length >= 1
                                ?
                                <>
                                    <label>Team Name</label>
                                    <input onChange={this.handleChange('teamName')} placeholder={reduxState.createdTeam[0].team_name} />
                                    <button onClick={this.handleDeleteTeam}>Delete Team</button>
                                </>
                                :
                                <></>
                        }
                    </form>

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

                    <>
                        {reduxState.createdTeam.length >= 1
                            ?
                            <>
                                <label>Team Name</label>
                                <input value={reduxState.createdTeam[0].team_name} readOnly />
                            </>
                            :
                            <></>}
                    </>

                </>
            )
        }
    }
}

const mapStateToRedux = reduxState => ({
    reduxState,
});

export default connect(mapStateToRedux)(Settings);