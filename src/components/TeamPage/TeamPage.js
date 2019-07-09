import React, { Component } from 'react';
import { connect } from 'react-redux';

// material ui
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class TeamPage extends Component {

    componentDidMount() {
        this.fetchUserTeam();
    }

    fetchUserTeam = () => {
        this.props.dispatch({ type: 'GET_USER_TEAM' });
        this.props.dispatch({ type: 'GET_USER_PLAYERS_BENCH' });
        this.props.dispatch({ type: 'GET_USER_PLAYERS_START' });
    }

    handleClickStart = (e) => {
        this.props.dispatch({ type: 'START_PLAYER', payload: e.target.value });
    }

    handleClickBench = (e) => {
        this.props.dispatch({ type: 'BENCH_PLAYER', payload: e.target.value });
    }

    handleClickRelease = (e) => {
        this.props.dispatch({ type: 'RELEASE_PLAYER', payload: e.target.value });
    }

    render() {
        let startTeam = this.props.reduxState.userTeamStart;
        let benchTeam = this.props.reduxState.userTeamBench;
        let testArray = [
            { pos: 'QB' }, { pos: 'RB' },
            { pos: 'RB' }, { pos: 'WR' },
            { pos: 'WR' }, { pos: 'TE' },
            { pos: 'K' }
        ]

        return (
            <>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>
                <pre>
                    {JSON.stringify(this.props.reduxState.userTeamStart, null, 2)}
                </pre>

                {
                    startTeam
                        ?
                        <>
                            <h3>{this.props.reduxState.createdTeam.length >= 1 ? this.props.reduxState.createdTeam[0].team_name : "Team"}</h3>
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
                                            <TableRow>
                                                <TableCell>{startTeam.QB.player_id ? startTeam.QB.player_position : <div style={{ opacity: '0.5' }}>QB</div>}</TableCell>
                                                <TableCell>{startTeam.QB.player_id ? startTeam.QB.player_first_name : <></>} {startTeam.QB.player_id ? startTeam.QB.player_last_name : <></>}</TableCell>
                                                <TableCell>{startTeam.QB.player_id ? <button onClick={this.handleClickBench} value={startTeam.QB.player_id}>Bench</button> : <></>}</TableCell>
                                                <TableCell>{startTeam.QB.player_id ? <button onClick={this.handleClickRelease} value={startTeam.QB.player_id}>Release</button> : <></>}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>{startTeam.RB.player_id ? startTeam.RB.player_position : <div style={{ opacity: '0.5' }}>RB ONE</div>}</TableCell>
                                                <TableCell>{startTeam.RB.player_id ? startTeam.RB.player_first_name : <></>} {startTeam.RB.player_id ? startTeam.RB.player_last_name : <></>}</TableCell>
                                                <TableCell>{startTeam.RB.player_id ? <button onClick={this.handleClickBench} value={startTeam.RB.player_id}>Bench</button> : <></>}</TableCell>
                                                <TableCell>{startTeam.RB.player_id ? <button onClick={this.handleClickRelease} value={startTeam.RB.player_id}>Release</button> : <></>}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>{startTeam.RB.player_id ? startTeam.RB.player_position : <div style={{ opacity: '0.5' }}>RB TWO</div>}</TableCell>
                                                <TableCell>{startTeam.RB.player_id ? startTeam.RB.player_first_name : <></>} {startTeam.RB.player_id ? startTeam.RB.player_last_name : <></>}</TableCell>
                                                <TableCell>{startTeam.RB.player_id ? <button onClick={this.handleClickBench} value={startTeam.RB.player_id}>Bench</button> : <></>}</TableCell>
                                                <TableCell>{startTeam.RB.player_id ? <button onClick={this.handleClickRelease} value={startTeam.RB.player_id}>Release</button> : <></>}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>{startTeam.WR.player_id ? startTeam.WR.player_position : <div style={{ opacity: '0.5' }}>WR ONE</div>}</TableCell>
                                                <TableCell>{startTeam.WR.player_id ? startTeam.WR.player_first_name : <></>} {startTeam.WR.player_id ? startTeam.WR.player_last_name : <></>}</TableCell>
                                                <TableCell>{startTeam.WR.player_id ? <button onClick={this.handleClickBench} value={startTeam.WR.player_id}>Bench</button> : <></>}</TableCell>
                                                <TableCell>{startTeam.WR.player_id ? <button onClick={this.handleClickRelease} value={startTeam.WR.player_id}>Release</button> : <></>}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>{startTeam.WR.player_id ? startTeam.WR.player_position : <div style={{ opacity: '0.5' }}>WR TWO</div>}</TableCell>
                                                <TableCell>{startTeam.WR.player_id ? startTeam.WR.player_first_name : <></>} {startTeam.WR.player_id ? startTeam.WR.player_last_name : <></>}</TableCell>
                                                <TableCell>{startTeam.WR.player_id ? <button onClick={this.handleClickBench} value={startTeam.WR.player_id}>Bench</button> : <></>}</TableCell>
                                                <TableCell>{startTeam.WR.player_id ? <button onClick={this.handleClickRelease} value={startTeam.WR.player_id}>Release</button> : <></>}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>{startTeam.TE.player_id ? startTeam.TE.player_position : <div style={{ opacity: '0.5' }}>TE</div>}</TableCell>
                                                <TableCell>{startTeam.TE.player_id ? startTeam.TE.player_first_name : <></>} {startTeam.TE.player_id ? startTeam.TE.player_last_name : <></>}</TableCell>
                                                <TableCell>{startTeam.TE.player_id ? <button onClick={this.handleClickBench} value={startTeam.TE.player_id}>Bench</button> : <></>}</TableCell>
                                                <TableCell>{startTeam.TE.player_id ? <button onClick={this.handleClickRelease} value={startTeam.TE.player_id}>Release</button> : <></>}</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>{startTeam.K.player_id ? startTeam.K.player_position : <div style={{ opacity: '0.5' }}>K</div>}</TableCell>
                                                <TableCell>{startTeam.K.player_id ? startTeam.K.player_first_name : <></>} {startTeam.K.player_id ? startTeam.K.player_last_name : <></>}</TableCell>
                                                <TableCell>{startTeam.K.player_id ? <button onClick={this.handleClickBench} value={startTeam.K.player_id}>Bench</button> : <></>}</TableCell>
                                                <TableCell>{startTeam.K.player_id ? <button onClick={this.handleClickRelease} value={startTeam.K.player_id}>Release</button> : <></>}</TableCell>
                                            </TableRow>
                                </TableBody>
                            </Table>
                        </>
                        :
                        <>
                            <h3>{this.props.reduxState.createdTeam.length >= 1 ? this.props.reduxState.createdTeam[0].team_name : "Team"}</h3>
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
                                        testArray.map((test, i = 8) => {
                                            return (
                                                <TableRow key={i}>
                                                    <TableCell>{<div style={{ opacity: '0.5' }}>{test.pos}</div>}</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell></TableCell>
                                                </TableRow>

                                            )
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </>
                }

                {
                    benchTeam.length >= 0
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
                                                <TableCell>{benchTeam[i] ? <button onClick={this.handleClickStart} value={benchTeam[i].player_id} name={benchTeam[i].player_position}>Start</button> : <></>}</TableCell>
                                                <TableCell>{benchTeam[i] ? <button onClick={this.handleClickRelease} value={benchTeam[i].player_id}>Release</button> : <></>}</TableCell>
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