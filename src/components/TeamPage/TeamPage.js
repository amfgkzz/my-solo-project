import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TeamPage.css';

// material ui
import { 
    AppBar, Button, Card, IconButton,
    Table, TableHead, TableBody, 
    TableRow, TableCell, Tooltip, Typography 
} from '@material-ui/core';

class TeamPage extends Component {

    componentDidMount() {
        this.fetchUserTeam();
    }

    fetchUserTeam = () => {
        this.props.dispatch({ type: 'FETCH_USER' });
        this.props.dispatch({ type: 'GET_USER_TEAM' });
        this.props.dispatch({ type: 'GET_USER_PLAYERS' });
    }

    handleClickStart = (e) => {
        if (this.props.reduxState.userTeamStart[`${e.currentTarget.name}`].player_id) {
            alert('There is already a player in that starting position!');
        } else {
            this.props.dispatch({ type: 'START_PLAYER', payload: e.currentTarget.value });
        }
    }

    handleClickBench = (e) => {
        this.props.dispatch({ type: 'BENCH_PLAYER', payload: e.currentTarget.value });
    }

    handleClickRelease = (e) => {
        this.props.dispatch({ type: 'RELEASE_PLAYER', payload: e.currentTarget.value });
    }

    render() {
        let startTeam = this.props.reduxState.userTeamStart;
        let benchTeam = this.props.reduxState.userTeamBench;
        let testArray = [
            { pos: 'QB' }, { pos: 'RB' },
            { pos: 'RB' }, { pos: 'WR' },
            { pos: 'TE' }, { pos: 'K' },
        ];

        if (this.props.reduxState.user.team_id === null) {
            return (
                <div className="no-players">

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

                </div>
            )
        }
        // FIX: show if start team exists
        else if (benchTeam.length !== 0 || (startTeam.QB && startTeam.QB.player_id) || 
        (startTeam.RB && startTeam.RB.player_id) || (startTeam.WR && startTeam.WR.player_id) || 
        (startTeam.TE && startTeam.TE.player_id ) || (startTeam.K && startTeam.K.player_id)) {
            return (
                <>

                <AppBar position="relative" color="secondary" style={{boxShadow: 'none', fontSize: '16pt'}}>Team</AppBar>
    
                    <br />
    
                    <div className="container-one">
    
                        <Card style={{ width: '600px' }}>

                            <Typography className="login-label">STARTERS</Typography>
    
                            <Table>
                                <TableHead>
                                    <TableRow style={{height: '10px'}}>
                                        <TableCell>Position</TableCell>
                                        <TableCell>Player Name</TableCell>
                                        <TableCell style={{textAlign: 'center'}} colSpan={2}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
    
                                    {
                                        startTeam.QB && startTeam.QB.player_id
                                            ?
                                            <TableRow>
                                                <TableCell>{startTeam.QB.player_position}</TableCell>
                                                <TableCell>{startTeam.QB.player_first_name} {startTeam.QB.player_last_name}</TableCell>
                                                <TableCell><Button size="small" color="secondary" variant='contained' onClick={this.handleClickBench} value={startTeam.QB.player_id}>Bench</Button></TableCell>
                                                <TableCell><Button size="small" color="secondary" variant='contained' onClick={this.handleClickRelease} value={startTeam.QB.player_id} >Release</Button></TableCell>
                                            </TableRow>
                                            :
                                            <TableRow>
                                                <TableCell><div style={{ opacity: '0.5' }}>QB</div></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                    }
    
                                    {
                                        startTeam.RB && startTeam.RB.player_id
                                            ?
                                            <TableRow>
                                                <TableCell>{startTeam.RB.player_position}</TableCell>
                                                <TableCell>{startTeam.RB.player_first_name} {startTeam.RB.player_last_name}</TableCell>
                                                <TableCell> <Button size="small" color="secondary" variant='contained' onClick={this.handleClickBench} value={startTeam.RB.player_id}>Bench</Button> </TableCell>
                                                <TableCell> <Button size="small" color="secondary" variant='contained' onClick={this.handleClickRelease} value={startTeam.RB.player_id} >Release</Button> </TableCell>
                                            </TableRow>
                                            :
                                            <TableRow>
                                                <TableCell><div style={{ opacity: '0.5' }}>RB</div></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                    }
    
                                    {
                                        startTeam.WR && startTeam.WR.player_id
                                            ?
                                            <TableRow>
                                                <TableCell>{startTeam.WR.player_position}</TableCell>
                                                <TableCell>{startTeam.WR.player_first_name} {startTeam.WR.player_last_name}</TableCell>
                                                <TableCell> <Button size="small" color="secondary" variant='contained' onClick={this.handleClickBench} value={startTeam.WR.player_id}>Bench</Button> </TableCell>
                                                <TableCell> <Button size="small" color="secondary" variant='contained' onClick={this.handleClickRelease} value={startTeam.WR.player_id} >Release</Button> </TableCell>
                                            </TableRow>
                                            :
                                            <TableRow>
                                                <TableCell><div style={{ opacity: '0.5' }}>WR</div></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                    }
    
                                    {
                                        startTeam.TE && startTeam.TE.player_id
                                            ?
                                            <TableRow>
                                                <TableCell>{startTeam.TE.player_position}</TableCell>
                                                <TableCell>{startTeam.TE.player_first_name} {startTeam.TE.player_last_name}</TableCell>
                                                <TableCell> <Button size="small" color="secondary" variant='contained' onClick={this.handleClickBench} value={startTeam.TE.player_id}>Bench</Button> </TableCell>
                                                <TableCell> <Button size="small" color="secondary" variant='contained' onClick={this.handleClickRelease} value={startTeam.TE.player_id} >Release</Button> </TableCell>
                                            </TableRow>
                                            :
                                            <TableRow>
                                                <TableCell><div style={{ opacity: '0.5' }}>TE</div></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                    }
    
                                    {
                                        startTeam.K && startTeam.K.player_id
                                            ?
                                            <TableRow>
                                                <TableCell>{startTeam.K.player_position}</TableCell>
                                                <TableCell>{startTeam.K.player_first_name} {startTeam.K.player_last_name}</TableCell>
                                                <TableCell> <Button variant='contained' color="secondary" size="small" onClick={this.handleClickBench} value={startTeam.K.player_id}>Bench</Button> </TableCell>
                                                <TableCell> <Button variant='contained' color="secondary" size="small" onClick={this.handleClickRelease} value={startTeam.K.player_id} >Release</Button> </TableCell>
                                            </TableRow>
                                            :
                                            <TableRow>
                                                <TableCell><div style={{ opacity: '0.5' }}>K</div></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                    }
    
                                </TableBody>
                            </Table>
    
                        </Card>
    
                    </div>
    
                    <br />
    
                    <div className="container-two">
    
                        <Card style={{ width: '600px' }}>

                        <Typography className="login-label">BENCH</Typography>
    
                            <Table>
                                <TableHead style={{backgroundColor: '#6e2db5'}}>
                                    {/* <TableRow>
                                        <TableCell style={{color: 'white'}}>Position</TableCell>
                                        <TableCell style={{color: 'white'}} colSpan={3}>Player Name</TableCell>
                                    </TableRow> */}
                                </TableHead>
                                <TableBody>
                                    {
                                        testArray.map((player, i = 9) => (
                                            < TableRow key={i}>
                                                <TableCell>{benchTeam[i] ? benchTeam[i].player_position : <div style={{ opacity: '0.5' }}>Bench</div>}</TableCell>
                                                <TableCell>{benchTeam[i] ? benchTeam[i].player_first_name : <div style={{ opacity: '0.5' }}>Empty</div>} {benchTeam[i] ? benchTeam[i].player_last_name : <></>}</TableCell>
                                                <TableCell>{benchTeam[i] ? <Button size="small" color="secondary" variant='contained' onClick={this.handleClickStart} name={benchTeam[i].player_position} value={benchTeam[i].player_id}>Start</Button> : <></>}</TableCell>
                                                <TableCell>{benchTeam[i] ? <Button size="small" color="secondary" variant='contained' onClick={this.handleClickRelease} value={benchTeam[i].player_id}>Release</Button> : <></>}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
    
                        </Card>
    
                    </div>
                </>
            )
        } 
        else {
            return (
                <>

                    <div className="no-players">

                        <Typography>
                            You don't have any players!
                            <br/>
                            Click the button below to head over to Free Agency
                        </Typography>

                        <br/>

                        <Tooltip
                        title="Free Agency is where you can add players
                        to your team. There are no duplicate players.
                        First come first serve!"
                        placement="left-start"
                        >
                            <IconButton>
                                <i className="material-icons">info</i>
                            </IconButton>
                        </Tooltip>

                        <Button
                        color="secondary"
                        size="small"
                        variant="contained"
                        onClick={()=>{this.props.history.push('/Players')}}
                        >
                        Free Agency
                        </Button>

                    </div>

</> 
            )
        }
    }
}

const mapStateToRedux = reduxState => ({
    reduxState,
});

export default connect(mapStateToRedux)(TeamPage);