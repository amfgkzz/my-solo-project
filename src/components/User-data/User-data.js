import React, { Component } from 'react';
import { connect } from 'react-redux';
import './user-data.css';

// Material UI
import {
    Button, Card, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Grid, Typography, 
    Table, TableHead, TableBody, TableRow, TableCell
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

                    <Grid container spacing={3}>

                        <Grid item xs={12}>

                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<i className="material-icons">keyboard_arrow_down</i>}
                                >
                                    <Typography>
                                        What is Fantasy Football?
                                    </Typography>

                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>

                                    <Typography>
                                        Fantasy football is a game
                                        in which participants assemble an imaginary team of
                                        real life footballers and score points based on those
                                         players' actual statistical performance or their perceived
                                         contribution on the field of play. Usually players are
                                         selected from one specific division in a particular country,
                                         although there are many variations. The original game was created
                                         in England by Bernie Donnelly on Saturday 14 August 1971 and is
                                         still going strong 45 years later. Fantasy football has evolved
                                         in recent years from a simple recreational activity into a significant
                                         business due to exposure via the internet.
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
                                        How does Fantasy Football work?
                                    </Typography>

                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>

                                    <Typography>

                                        Your team competes against another team every week. During the NFL season,
                                        the real teams face each other and so do the fantasy teams in your league.
                                        The players' real-time stats are converted into fantasy points by your league
                                        provider, and the fantasy team that scores the most points wins the game for the week.
    
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
                                        Is there anything else I should know?
                                    </Typography>

                                </ExpansionPanelSummary>

                                <ExpansionPanelDetails>

                                    <Typography>

                                    The two most popular scoring formats are standard and P.P.R. 
                                    (points per reception). 
                                    
                                    Standard draft leagues are the most popular fantasy football leagues 
                                    and generally begin with teams selecting all their players in a serpentine 
                                    style draft. Owners then set their lineups each week based on the number of 
                                    players per position allowed by league rules.
                                    
                                    In P.P.R. leagues, as the name implies, 
                                    players who tend to catch more passes than others at their position 
                                    are of greater value. This means that players will receive point value 
                                    for every catch they make in P.P.R., even if they gain no yards.

                                
                                    </Typography>

                                </ExpansionPanelDetails>

                            </ExpansionPanel>

                        </Grid>


                    </Grid>

                    <br />

                    <Typography>
                        Click the button to start playing!
                                    </Typography>

                    <Button
                        size="small"
                        color="secondary"
                        variant="contained"
                        onClick={() => { this.props.history.push('/CreateLeague') }}
                    >
                        Create League
                                        </Button>

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
                                    <TableCell style={{ color: 'white' }}>League Type</TableCell>
                                    <TableCell style={{ color: 'white' }}>League Numbers</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.reduxState.createdLeague.map((league, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{league.league_name}</TableCell>
                                        <TableCell>{league.league_type}</TableCell>
                                        <TableCell>{league.league_numbers}</TableCell>
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
                                    <TableCell style={{ color: 'white' }}>League Type</TableCell>
                                    <TableCell style={{ color: 'white' }}>League Numbers</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.reduxState.createdLeague.map((league, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{league.league_name}</TableCell>
                                        <TableCell>{league.league_type}</TableCell>
                                        <TableCell>{league.league_numbers}</TableCell>
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