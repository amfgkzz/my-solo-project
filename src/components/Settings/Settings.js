import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI
import { Button, FormControl, FormLabel, Input, Select, MenuItem } from '@material-ui/core';

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
                    <pre>
                        {JSON.stringify(this.state, null, 2)}
                    </pre>

                    <form onSubmit={reduxState.createdTeam.length >= 1 ? this.handleSubmit : () => { this.setState({ inEditMode: !this.state.inEditMode }) }}
                        onReset={() => { this.setState({ inEditMode: !this.state.inEditMode }) }}>
                        <Button variant="outlined" type="reset">Cancel</Button>
                        <Button variant="outlined" type="submit">Save</Button>
                        {
                            reduxState.createdLeague.length >= 1
                                ?
                                <>
                                    <br />

                                    <FormLabel>League Name</FormLabel>

                                    <Input onChange={this.handleChange('leagueName')} placeholder={reduxState.createdLeague[0].league_name} />

                                    <br />

                                    <FormLabel>League Numbers</FormLabel>

                                    <Select value={this.state.editObject.leagueNumbers} onChange={this.handleChange('leagueNumbers')} defaultValue="8">
                                        <MenuItem value="4">4</MenuItem>
                                        <MenuItem value="6">6</MenuItem>
                                        <MenuItem value="8">8</MenuItem>
                                        <MenuItem value="10">10</MenuItem>
                                        <MenuItem value="12">12</MenuItem>
                                    </Select>

                                    <br />

                                    <FormLabel>League Type</FormLabel>

                                    <Select value={this.state.editObject.leagueType} onChange={this.handleChange('leagueType')} defaultValue="Standard">
                                        <MenuItem value="Standard">Standard</MenuItem>
                                        <MenuItem value="PPR">PPR</MenuItem>
                                    </Select>

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
                                    <FormLabel>Team Name</FormLabel>
                                    <Input onChange={this.handleChange('teamName')} placeholder={reduxState.createdTeam[0].team_name} />
                                    <Button variant="outlined" onClick={this.handleDeleteTeam}>Delete Team</Button>
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

                    <Button variant="outlined" onClick={() => { this.setState({ inEditMode: !this.state.inEditMode }) }}>Edit</Button>

                    {reduxState.createdLeague.map((league, i) => (
                        <form key={i}>
                            <FormLabel>League Name</FormLabel>
                            <Input value={league.league_name} readOnly />
                            <br />
                            <FormLabel>League Numbers</FormLabel>
                            <Input value={league.league_numbers} readOnly />
                            <br />
                            <FormLabel>League Type</FormLabel>
                            <Input value={league.league_type} readOnly />
                        </form>
                    ))}

                    <br />

                    <>
                        {reduxState.createdTeam.length >= 1
                            ?
                            <>
                                <FormLabel>Team Name</FormLabel>
                                <Input value={reduxState.createdTeam[0].team_name} readOnly />
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