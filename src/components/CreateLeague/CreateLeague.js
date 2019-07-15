import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CreateLeague.css'

// Material UI
import { Button, FormLabel, IconButton, Input, Paper, Select, MenuItem, Tooltip, Typography } from '@material-ui/core';

class CreateLeague extends Component {

    state = {
        userID: '',
        leagueName: '',
        leagueNumber: '8',
        leagueType: 'Standard',
    }

    handleChange = (propertyName) => (e) => {
        this.setState({
            [propertyName]: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.leagueName === '') {
            // FIX: change this to something less annoying
            alert('Please fill in all the blanks!');
        } else if (this.props.user.league_id === null) {
            this.setState({
                userID: this.props.user.id,
            }, () => {
                this.props.dispatch({ type: 'CREATE_LEAGUE', payload: this.state });
                this.props.history.push('/CreateTeam');
            });
        } else {
            alert('You already have a league!');
        }
    }

    render() {

        return (
            <>

                <div className="league-form-container">

                    <Paper>

                        <Typography
                            className="login-label"
                        >
                            Create a League
                        </Typography>

                        <br/>

                        <form onSubmit={this.handleSubmit}>

                            <FormLabel>League Name: </FormLabel>
                            <Input re="true" placeholder="Name Your League!" onChange={this.handleChange('leagueName')} />

                            <br />

                            <Tooltip
                            title="Number of users who can play in your league"
                            placement="left-start"
                            >
                            <IconButton>
                            <i className="material-icons">info</i>
                            </IconButton>
                            </Tooltip>

                            <FormLabel>Number of Teams: </FormLabel>
                            <Select onChange={this.handleChange('leagueNumber')} value={this.state.leagueNumber}>
                                <MenuItem value="4">4</MenuItem>
                                <MenuItem value="6">6</MenuItem>
                                <MenuItem value="8">8</MenuItem>
                                <MenuItem value="10">10</MenuItem>
                                <MenuItem value="12">12</MenuItem>
                            </Select>

                            <br />

                            {
                                this.state.leagueType === 'Standard'
                                ?
                                <Tooltip
                                title="Your League will use the standard scoring rules"
                                placement="left-start"
                                >
                                <IconButton>
                                <i className="material-icons">info</i>
                                </IconButton>
                                </Tooltip>
                                :
                                <Tooltip
                                title="Your league will use a PPR (Points Per Reception)
                                scoring system, this means that
                                fractional or full points are awarded 
                                for every reception tallied by a player."
                                placement="left-start"
                                >
                                <IconButton>
                                <i className="material-icons">info</i>
                                </IconButton>
                                </Tooltip>

                            }

                            <FormLabel>Scoring Type: </FormLabel>
                            <Select onChange={this.handleChange('leagueType')} value={this.state.leagueType}>
                                <MenuItem value="Standard">Standard</MenuItem>
                                <MenuItem value="PPR">PPR</MenuItem>
                            </Select>

                            <br />
                            <br/>

                            <Button
                                type="submit"
                                variant="contained"
                                size="small"
                                color="secondary"
                            >Create
                            </Button>

                        </form>

                    </Paper>

                </div>

            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
});

export default connect(mapStateToProps)(CreateLeague);