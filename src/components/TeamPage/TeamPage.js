import React, { Component } from 'react';
import { connect } from 'react-redux';

// material ui
import { AppBar, Button, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

class TeamPage extends Component {

    componentDidMount() {
        this.fetchUserTeam();
    }

    fetchUserTeam = () => {
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
            { pos: 'WR' }, { pos: 'TE' },
            { pos: 'K' }
        ];

        return (
            <>
                <AppBar position="relative" color="secondary">Team</AppBar>
                    
                {
                    startTeam
                        ?
                        <>
                            <h3>Start</h3>

                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Position</TableCell>
                                        <TableCell>Player Name</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {
                                        startTeam.QB && startTeam.QB.player_id
                                            ?
                                            <TableRow>
                                                <TableCell>{startTeam.QB.player_position}</TableCell>
                                                <TableCell>{startTeam.QB.player_first_name} {startTeam.QB.player_last_name}</TableCell>
                                                <TableCell> <Button variant="outlined" onClick={this.handleClickBench} value={startTeam.QB.player_id}>Bench</Button> </TableCell>
                                                <TableCell> <Button variant="outlined" onClick={this.handleClickRelease} value={startTeam.QB.player_id} >Release</Button> </TableCell>
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
                                                <TableCell> <Button variant="outlined" onClick={this.handleClickBench} value={startTeam.RB.player_id}>Bench</Button> </TableCell>
                                                <TableCell> <Button variant="outlined" onClick={this.handleClickRelease} value={startTeam.RB.player_id} >Release</Button> </TableCell>
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
                                                <TableCell> <Button variant="outlined" onClick={this.handleClickBench} value={startTeam.WR.player_id}>Bench</Button> </TableCell>
                                                <TableCell> <Button variant="outlined" onClick={this.handleClickRelease} value={startTeam.WR.player_id} >Release</Button> </TableCell>
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
                                                <TableCell> <Button variant="outlined" onClick={this.handleClickBench} value={startTeam.TE.player_id}>Bench</Button> </TableCell>
                                                <TableCell> <Button variant="outlined" onClick={this.handleClickRelease} value={startTeam.TE.player_id} >Release</Button> </TableCell>
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
                                                <TableCell> <Button variant="outlined" onClick={this.handleClickBench} value={startTeam.K.player_id}>Bench</Button> </TableCell>
                                                <TableCell> <Button variant="outlined" onClick={this.handleClickRelease} value={startTeam.K.player_id} >Release</Button> </TableCell>
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
                        </>
                        :
                        <></>
                }



                {
                    benchTeam
                        ?
                        <>
                            <h3>Bench</h3>

                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Position</TableCell>
                                        <TableCell>Player Name</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        testArray.map((player, i = 9) => (
                                            < TableRow key={i}>
                                                <TableCell>{benchTeam[i] ? benchTeam[i].player_position : <div style={{ opacity: '0.5' }}>Bench</div>}</TableCell>
                                                <TableCell>{benchTeam[i] ? benchTeam[i].player_first_name : <></>} {benchTeam[i] ? benchTeam[i].player_last_name : <></>}</TableCell>
                                                <TableCell>{benchTeam[i] ? <Button variant="outlined" onClick={this.handleClickStart} name={benchTeam[i].player_position} value={benchTeam[i].player_id}>Start</Button> : <></>}</TableCell>
                                                <TableCell>{benchTeam[i] ? <Button variant="outlined" onClick={this.handleClickRelease} value={benchTeam[i].player_id}>Release</Button> : <></>}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </>
                        :
                        <></>
                }

            </>
        )
    }
}

const mapStateToRedux = reduxState => ({
    reduxState,
});

export default connect(mapStateToRedux)(TeamPage);