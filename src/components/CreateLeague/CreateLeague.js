import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CreateLeague.css'

// Material UI
import { AppBar, Button, FormLabel, Input, Select, MenuItem } from '@material-ui/core';

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
                <AppBar position="relative" color="primary" style={{boxShadow: 'none'}}>Create a League</AppBar>

                <h1>Create a League!</h1>
                <h2>Please follow the instructions below to get started.</h2>

                <form onSubmit={this.handleSubmit}>

                    <FormLabel>League Name</FormLabel>
                    <Input re="true" placeholder="League Name" onChange={this.handleChange('leagueName')} />

                    <br />

                    <FormLabel>Number of Teams</FormLabel>
                    <Select onChange={this.handleChange('leagueNumber')} value={this.state.leagueNumber}>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="6">6</MenuItem>
                        <MenuItem value="8">8</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="12">12</MenuItem>
                    </Select>

                    <br />

                    {/* FIX: explain the scoring type to user */}
                    <FormLabel>Scoring Type</FormLabel>
                    <Select onChange={this.handleChange('leagueType')} value={this.state.leagueType}>
                        <MenuItem value="Standard">Standard</MenuItem>
                        <MenuItem value="PPR">PPR</MenuItem>
                    </Select>

                    <br />

                    <Button type="submit" variant="outlined">Create</Button>
                </form>

            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
});

export default connect(mapStateToProps)(CreateLeague);