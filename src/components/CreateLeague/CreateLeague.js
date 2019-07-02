import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CreateLeague.css'

class CreateLeague extends Component {

    state = {
        leagueName: '',
        leagueNumber: '8',
        leagueType: 'Standard',
    }



    handleChangeLeagueName = (e) => {
        this.setState({
            leagueName: e.target.value,
        });
    }

    handleChangeTeamNumber = (e) => {
        this.setState({
            leagueNumber: e.target.value,
        });
    }

    handleChangeType = (e) => {
        this.setState({
            leagueType: e.target.value,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.dispatch({ type: 'CREATE_LEAGUE', payload: this.state });
    }

    render() {

        return (
            <>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>

                <h1>Create a League!</h1>
                <h2>Please follow the instructions below to get started.</h2>

                <form onSubmit={this.handleSubmit}>

                    <label>League Name</label>
                    <input re="true" placeholder="League Name" onChange={this.handleChangeLeagueName} />

                    <br />

                    <label>Number of Teams</label>
                    <select onChange={this.handleChangeTeamNumber} defaultValue="8">
                        <option value="4">4</option>
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                    </select>

                    <br />

                    {/* FIX: explain the scoring type to user */}
                    <label>Scoring Type</label>
                    <select onChange={this.handleChangeType} defaultValue="Standard">
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

export default connect()(CreateLeague);