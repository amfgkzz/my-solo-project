import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material UI
import { AppBar, Button, FormLabel, Input } from '@material-ui/core';

class CreateTeam extends Component {

    state = {
        userID: '',
        teamName: '',
    }

    componentDidMount() {
        this.fetchUserTeam();
    }

    fetchUserTeam = () => {
        this.props.dispatch({ type: 'FETCH_USER' });
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.state.teamName === '') {
            // FIX: change this alert to something less annoying
            alert('Please put in a team name!');
        } else if (this.props.user.team_id == null) {
            this.setState({
                userID: this.props.user.id,
            }, () => {
                this.props.dispatch({ type: 'CREATE_TEAM', payload: this.state });
                this.props.history.push('/home');
            });
        } else {
            alert('You already have a team!');
        }
    }

    handleChange = (e) => {
        this.setState({
            teamName: e.target.value,
        });
    }

    render() {
        return (
            <>
                                <AppBar position="relative" color="secondary">Create a Team</AppBar>
                {/* <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>

                <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre> */}

                <form onSubmit={this.handleClick}>

                    <FormLabel>Team Name</FormLabel>
                    <Input onChange={this.handleChange} placeholder="Team Name" />

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

export default connect(mapStateToProps)(CreateTeam);