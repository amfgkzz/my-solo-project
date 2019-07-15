import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Settings.css';

// Material UI
import { AppBar, Button, FormLabel, Input, Paper, Select, MenuItem, Typography } from '@material-ui/core';

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
        this.setState({
            inEditMode: !this.state.inEditMode,
        }, () => {
            this.props.dispatch({ type: 'DELETE_USER_TEAM', payload: this.props.reduxState.user });
        });
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

                    <AppBar position="relative" color="secondary" style={{ boxShadow: 'none' }}>Settings</AppBar>

                    <div className="settings-form-container">

                        <form onSubmit={reduxState.createdTeam.length >= 1 ? this.handleSubmit : () => { this.setState({ inEditMode: !this.state.inEditMode }) }}
                            onReset={() => { this.setState({ inEditMode: !this.state.inEditMode }) }}>

                            {
                                reduxState.createdLeague.length >= 1
                                    ?
                                    <>

                                        <Paper style={{ width: '500px' }}>

                                            <Typography
                                                className="login-label"
                                            >
                                                {
                                                    this.props.reduxState.createdLeague && this.props.reduxState.createdLeague[0]
                                                        ?
                                                        this.props.reduxState.createdLeague[0].league_name
                                                        :
                                                        <>{JSON.stringify(this.props, null, 2)}</>
                                                }
                                            </Typography>

                                            <FormLabel>League Name: </FormLabel>

                                            <Input onChange={this.handleChange('leagueName')} placeholder={reduxState.createdLeague[0].league_name} />

                                            <br />

                                            <FormLabel>League Numbers: </FormLabel>

                                            <Select value={this.state.editObject.leagueNumbers} onChange={this.handleChange('leagueNumbers')}>
                                                <MenuItem value="4">4</MenuItem>
                                                <MenuItem value="6">6</MenuItem>
                                                <MenuItem value="8">8</MenuItem>
                                                <MenuItem value="10">10</MenuItem>
                                                <MenuItem value="12">12</MenuItem>
                                            </Select>

                                            <br />

                                            <FormLabel>League Type: </FormLabel>

                                            <Select value={this.state.editObject.leagueType} onChange={this.handleChange('leagueType')}>
                                                <MenuItem value="Standard">Standard</MenuItem>
                                                <MenuItem value="PPR">PPR</MenuItem>
                                            </Select>

                                        </Paper>

                                        {/* FIX: add ability to delete league
                                    <button onClick={this.handleDeleteLeague}>Delete League</button> */}
                                    </>
                                    :
                                    <></>
                            }

                            <br />

                            {
                                reduxState.createdTeam.length >= 1
                                    ?
                                    <Paper style={{ width: '500px' }}>

                                        <Typography
                                            className="login-label"
                                        >
                                            {
                                                this.props.reduxState.createdTeam && this.props.reduxState.createdTeam[0]
                                                    ?
                                                    this.props.reduxState.createdTeam[0].team_name
                                                    :
                                                    <>{JSON.stringify(this.props, null, 2)}</>
                                            }
                                        </Typography>

                                        <FormLabel>Team Name: </FormLabel>
                                        <Input onChange={this.handleChange('teamName')} placeholder={reduxState.createdTeam[0].team_name} />
                                        <Button
                                            size="small"
                                            color="secondary"
                                            variant="contained"
                                            onClick={this.handleDeleteTeam}>
                                            Delete Team
                                        </Button>

                                    </Paper>
                                    :
                                    <></>
                            }

                            <br />

                            <Button
                                size="small"
                                color="secondary"
                                variant="contained"
                                type="reset">
                                Cancel
                            </Button>

                            <div className="divider" />

                            <Button
                                size="small"
                                color="secondary"
                                variant="contained"
                                type="submit"
                            >
                                Save
                            </Button>

                        </form>

                    </div>

                </>
            )
        } else {
            return (
                <>

                    <AppBar position="relative" color="secondary" style={{ boxShadow: 'none' }}>Settings</AppBar>

                    <div className="settings-form-container">

                        <form>

                            {reduxState.createdLeague.map((league, i) => (

                                <Paper style={{ width: '500px' }} key={i}>

                                    <Typography
                                        className="login-label"
                                    >
                                        {
                                            this.props.reduxState.createdLeague && this.props.reduxState.createdLeague[0]
                                                ?
                                                this.props.reduxState.createdLeague[0].league_name
                                                :
                                                <>{JSON.stringify(this.props, null, 2)}</>
                                        }
                                    </Typography>

                                    <FormLabel>League Name: </FormLabel>
                                    <Input value={league.league_name} readOnly />
                                    <br />
                                    <FormLabel>League Numbers: </FormLabel>
                                    <Input value={league.league_numbers} readOnly />
                                    <br />
                                    <FormLabel>League Type: </FormLabel>
                                    <Input value={league.league_type} readOnly />

                                </Paper>

                            ))}

                            <br />

                            <>
                                {
                                    reduxState.createdTeam.length >= 1
                                        ?
                                        <Paper style={{ width: '500px' }}>

                                            <Typography
                                                className="login-label"
                                            >
                                                {
                                                    this.props.reduxState.createdTeam && this.props.reduxState.createdTeam[0]
                                                        ?
                                                        this.props.reduxState.createdTeam[0].team_name
                                                        :
                                                        <>{JSON.stringify(this.props, null, 2)}</>
                                                }
                                            </Typography>

                                            <FormLabel>Team Name: </FormLabel>
                                            <Input value={reduxState.createdTeam[0].team_name} readOnly />

                                        </Paper>
                                        :
                                        <></>
                                }
                            </>

                            <br />

                        </form>

                    </div>

                    <div>

                        <Button
                            size="small"
                            color="secondary"
                            variant="contained"
                            onClick={() => { this.setState({ inEditMode: !this.state.inEditMode }) }}
                        >
                            Edit
                        </Button>

                    </div>

                </>
            )
        }
    }
}

const mapStateToRedux = reduxState => ({
    reduxState,
});

export default connect(mapStateToRedux)(Settings);