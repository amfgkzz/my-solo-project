import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateTeam extends Component {

    state = {
        teamName: '',
    }

    handleClick = (e) => {
        e.preventDefault();
        if (this.state.teamName === '') {
            // FIX: change this alert to something less annoying
            alert('Please put in a team name!');
        } else {
            this.props.dispatch({ type: 'CREATE_TEAM', payload: this.state });
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

                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>

                <form onSubmit={this.handleClick}>

                    <label>Team Name</label>
                    <input onChange={this.handleChange} placeholder="Team Name" />

                    <br />

                    <button>Create</button>

                </form>
                
            </>
        )
    }
}

export default connect()(CreateTeam);