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
        let startTeam = this.props.reduxState.userTeamStart;
        if (this.props.reduxState.user.league_id === null) {
            return (
                <>

                <div className="user-grid">

                    <Grid container spacing={3}>

                        <Grid item xs={12}>

                        <Card style={{width: '800px', margin: 'auto'}}>

                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    style={{backgroundColor: '#6e2db5', color: 'white'}}
                                    expandIcon={<i style={{color: 'white'}} className="material-icons">keyboard_arrow_down</i>}
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

                            </Card>

                        </Grid>

                        <Grid item xs={12}>

                        <Card style={{width: '800px', margin: 'auto'}}>

                            <ExpansionPanel>

                                <ExpansionPanelSummary
                                    style={{backgroundColor: '#6e2db5', color: 'white'}}
                                    expandIcon={<i style={{color: 'white'}} className="material-icons">keyboard_arrow_down</i>}
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

                            </Card>

                        </Grid>

                        <Grid item xs={12}>

                        <Card style={{width: '800px', margin: 'auto'}}>

                            <ExpansionPanel>

                                <ExpansionPanelSummary
                                    style={{backgroundColor: '#6e2db5', color: 'white'}}
                                    expandIcon={<i style={{color: 'white'}} className="material-icons">keyboard_arrow_down</i>}
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

                            </Card>

                        </Grid>

                    </Grid>

                    </div>

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
                <>

                <div className="paper-table">

                    <Card style={{width:'600px'}}>
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

                <br/>

                <Typography>
                    You don't have a team!
                    <br/>
                    In order to play you must create a team.
                    <br/>
                    Click the button below to get started.
                </Typography>

                <br/>

                <Button
                color="secondary"
                size="small"
                variant="contained"
                onClick={()=>{this.props.history.push('/CreateTeam')}}
                >
                    Create Team
                </Button>

                </>
            )
        } else if (this.props.reduxState.user.league_id && this.props.reduxState.user.team_id) {
            return (
                <div className="paper-table">

                    <Card style={{width:'600px'}}>
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

                    {
                        startTeam.QB && startTeam.QB.player_id || startTeam.RB && startTeam.RB.player_id ||
                        startTeam.WR && startTeam.WR.player_id || startTeam.TE && startTeam.TE.player_id ||
                        startTeam.K && startTeam.K.player_id

                        ?

                        <Card style={{ width: '400px' }}>

<Table>
    <TableHead style={{backgroundColor: '#6e2db5'}}>
        <TableRow>
            <TableCell style={{color: 'white'}}>Position</TableCell>
            <TableCell style={{color: 'white'}}>Player Name</TableCell>
        </TableRow>
    </TableHead>
    <TableBody>

        {
            startTeam.QB && startTeam.QB.player_id
                ?
                <TableRow>
                    <TableCell>{startTeam.QB.player_position}</TableCell>
                    <TableCell>{startTeam.QB.player_first_name} {startTeam.QB.player_last_name}</TableCell>
                </TableRow>
                :
                <TableRow>
                    <TableCell><div style={{ opacity: '0.5' }}>QB</div></TableCell>
                    <TableCell></TableCell>
                </TableRow>
        }

        {
            startTeam.RB && startTeam.RB.player_id
                ?
                <TableRow>
                    <TableCell>{startTeam.RB.player_position}</TableCell>
                    <TableCell>{startTeam.RB.player_first_name} {startTeam.RB.player_last_name}</TableCell>
                </TableRow>
                :
                <TableRow>
                    <TableCell><div style={{ opacity: '0.5' }}>RB</div></TableCell>
                    <TableCell></TableCell>
                </TableRow>
        }

        {
            startTeam.WR && startTeam.WR.player_id
                ?
                <TableRow>
                    <TableCell>{startTeam.WR.player_position}</TableCell>
                    <TableCell>{startTeam.WR.player_first_name} {startTeam.WR.player_last_name}</TableCell>
                </TableRow>
                :
                <TableRow>
                    <TableCell><div style={{ opacity: '0.5' }}>WR</div></TableCell>
                    <TableCell></TableCell>
                </TableRow>
        }

        {
            startTeam.TE && startTeam.TE.player_id
                ?
                <TableRow>
                    <TableCell>{startTeam.TE.player_position}</TableCell>
                    <TableCell>{startTeam.TE.player_first_name} {startTeam.TE.player_last_name}</TableCell>
                </TableRow>
                :
                <TableRow>
                    <TableCell><div style={{ opacity: '0.5' }}>TE</div></TableCell>
                    <TableCell></TableCell>
                </TableRow>
        }

        {
            startTeam.K && startTeam.K.player_id
                ?
                <TableRow>
                    <TableCell>{startTeam.K.player_position}</TableCell>
                    <TableCell>{startTeam.K.player_first_name} {startTeam.K.player_last_name}</TableCell>
                </TableRow>
                :
                <TableRow>
                    <TableCell><div style={{ opacity: '0.5' }}>K</div></TableCell>
                    <TableCell></TableCell>
                </TableRow>
        }

    </TableBody>
</Table>

</Card>

                        :
                        <>

                        <Typography>
                        You don't have anyone on your starting team!

                        <br/>

                        Click the button below to head to your team page.
                        </Typography>

                        <Button
                        color="secondary"
                        size="small"
                        variant="contained"
                        onClick={()=>{this.props.history.push('/UserTeamPage')}}
                        >
                        Team
                        </Button>

                        </>
                    }

                </div>
            )
        }
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(UserData);