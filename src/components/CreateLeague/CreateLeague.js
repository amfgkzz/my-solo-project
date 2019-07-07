import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CreateLeague.css'

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
                {/* <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre> */}

                <h1>Create a League!</h1>
                <h2>Please follow the instructions below to get started.</h2>

                <form onSubmit={this.handleSubmit}>

                    <label>League Name</label>
                    <input re="true" placeholder="League Name" onChange={this.handleChange('leagueName')} />

                    <br />

                    <label>Number of Teams</label>
                    <select onChange={this.handleChange('leagueNumber')} defaultValue="8">
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>

                    <br />

                    {/* FIX: explain the scoring type to user */}
                    <label>Scoring Type</label>
                    <select onChange={this.handleChange('leagueType')} defaultValue="Standard">
                        <option>Standard</option>
                        <option>PPR</option>
                    </select>

                    <br />

                    <button>Create</button>
                </form>

            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    user: reduxState.user,
});

export default connect(mapStateToProps)(CreateLeague);