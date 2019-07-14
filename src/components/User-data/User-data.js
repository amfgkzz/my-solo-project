import React, { Component } from 'react';
import { connect } from 'react-redux';
import './user-data.css';

// Material UI
import { Card, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

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
        const {classes} = this.props
        if (this.props.reduxState.user.league_id === null) {
            return (
                <>
                    <h3>Create a League and Start Playing Today!</h3>
                </>
            )
        } else if (this.props.reduxState.user.team_id === null) {
            return (
                <div className="paper-table">

                    <Card>
                        <Table>
                            <TableHead style={{backgroundColor: '#4c2d92'}}>
                                <TableRow>
                                    <TableCell style={{color: 'white'}}>League Name</TableCell>
                                    <TableCell style={{color: 'white'}}>League Numbers</TableCell>
                                    <TableCell style={{color: 'white'}}>League Type</TableCell>
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
                    </Card>
                </div>
            )
        } else if (this.props.reduxState.user.league_id && this.props.reduxState.user.team_id) {
            return (
                <div className="paper-table">

                    <Card>
                        <Table>
                            <TableHead style={{backgroundColor: '#4c2d92'}}>
                                <TableRow>
                                    <TableCell style={{color: 'white'}}>League Name</TableCell>
                                    <TableCell style={{color: 'white'}}>League Numbers</TableCell>
                                    <TableCell style={{color: 'white'}}>League Type</TableCell>
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
                    </Card>
                    <br />

                </div>
            )
        }
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(UserData);