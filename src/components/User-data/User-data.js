import React, { Component } from 'react';
import { connect } from 'react-redux';
import './user-data.css';

// Material UI
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

class UserData extends Component {

    componentDidMount() {
        this.fetchUserData();
    }

    fetchUserData = () => {
        this.props.dispatch({ type: 'GET_USER_LEAGUE' });
        this.props.dispatch({ type: 'GET_USER_TEAM' });
        this.props.dispatch({ type: 'FETCH_USER' });
    }

    render() {
        if (this.props.reduxState.user.league_id === null) {
            return (
                <>
                    <h3>Create a League and Start Playing Today!</h3>
                    {/* <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre> */}
                </>
            )
        } else if (this.props.reduxState.user.team_id === null) {
            return (
                <div className="paper-table">
                    {/* <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre> */}
                
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>League Name</TableCell>
                                    <TableCell>League Numbers</TableCell>
                                    <TableCell>League Type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.reduxState.createdLeague.map((league, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{league.league_name}</TableCell>
                                        <TableCell>{league.league_numbers}</TableCell>
                                        <TableCell>{league.league_type}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            )
        } else if (this.props.reduxState.user.league_id && this.props.reduxState.user.team_id) {
            return (
                <div className="paper-table">
                    {/* <pre>
                        {JSON.stringify(this.props, null, 2)}
                    </pre> */}
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>League Name</TableCell>
                                    <TableCell>League Numbers</TableCell>
                                    <TableCell>League Type</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.reduxState.createdLeague.map((league, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{league.league_name}</TableCell>
                                        <TableCell>{league.league_numbers}</TableCell>
                                        <TableCell>{league.league_type}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                    <br />

                    <h3>{this.props.reduxState.createdTeam.length >= 1 ? this.props.reduxState.createdTeam[0].team_name : "No Team"}</h3>

                </div>
            )
        }
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(UserData);