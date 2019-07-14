import React, { Component } from 'react';
import { connect } from 'react-redux';
import './user-data.css';

// Material UI
import {
    Button, Card, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, ExpansionPanelActions, Grid,
    Typography, Table, TableHead,
    TableBody, TableRow, TableCell
}
    from '@material-ui/core';

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

                    <div></div>

                    <Grid container spacing={3}>

                        <Grid item xs={12}>

                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<i className="material-icons">keyboard_arrow_down</i>}
                                >
                                    <Typography>
                                        1. What is Fantasy Football?
                                    </Typography>

                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>

                                    <Typography>
                                        Test2
                                    </Typography>

                                </ExpansionPanelDetails>

                            </ExpansionPanel>

                        </Grid>

                        <Grid item xs={12}>

                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<i className="material-icons">keyboard_arrow_down</i>}
                                >
                                    <Typography>
                                        2. How does Fantasy Football work?
                                    </Typography>

                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>

                                    <Typography>
                                        Test2
                                    </Typography>

                                </ExpansionPanelDetails>

                            </ExpansionPanel>

                        </Grid>

                        <Grid item xs={12}>

                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<i className="material-icons">keyboard_arrow_down</i>}
                                >
                                    <Typography>
                                        3. Where can I play?
                                    </Typography>

                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>

                                    <Typography>
                                        Click the button to start playing!
                                    </Typography>

                                    <ExpansionPanelActions>

                                        <Button
                                            size="small"
                                            color="secondary"
                                            variant="contained"
                                            onClick={() => { this.props.history.push('/CreateLeague') }}
                                        >
                                            Create League
                                        </Button>
                                        
                                    </ExpansionPanelActions>

                                </ExpansionPanelDetails>

                            </ExpansionPanel>

                        </Grid>

                    </Grid>

                    <br />

                </>
            )
        } else if (this.props.reduxState.user.team_id === null) {
            return (
                <div className="paper-table">

                    <Card>
                        <Table>
                            <TableHead style={{ backgroundColor: '#6e2db5' }}>
                                <TableRow>
                                    <TableCell style={{ color: 'white' }}>League Name</TableCell>
                                    <TableCell style={{ color: 'white' }}>League Numbers</TableCell>
                                    <TableCell style={{ color: 'white' }}>League Type</TableCell>
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
                            <TableHead style={{ backgroundColor: '#6e2db5' }}>
                                <TableRow>
                                    <TableCell style={{ color: 'white' }}>League Name</TableCell>
                                    <TableCell style={{ color: 'white' }}>League Numbers</TableCell>
                                    <TableCell style={{ color: 'white' }}>League Type</TableCell>
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