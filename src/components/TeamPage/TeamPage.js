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
        console.log(e.target.name);
        this.props.dispatch({ type: 'START_PLAYER', payload: e.target.value });
    }

    handleClickBench = (e) => {
        this.props.dispatch({ type: 'BENCH_PLAYER', payload: e.target.value });
    }

    handleClickRelease = (e) => {
        this.props.dispatch({ type: 'RELEASE_PLAYER', payload: e.target.value });
    }

    render() {
        let benchTeam = this.props.reduxState.userTeamBench;
        let startTeam = this.props.reduxState.userTeamStart;
        let testArray = [{ pos: 'QB' }, { pos: 'RB' }, { pos: 'RB' }, { pos: 'WR' }, { pos: 'WR' }, { pos: 'TE' }, { pos: 'FLEX' }, { pos: 'K' }]

        return (
            <>
                {/* <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre> */}

                {
                    startTeam[0]
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
                                    {
                                        testArray.map((player, i) => (
                                            <TableRow key={i}>
                                                <TableCell>{startTeam[i] ? startTeam[i].player_position : <div style={{ opacity: '0.5' }}>{player.pos}</div>}</TableCell>
                                                <TableCell>{startTeam[i] ? startTeam[i].player_first_name : <></>} {startTeam[i] ? startTeam[i].player_last_name : <></>}</TableCell>
                                                <TableCell>{startTeam[i] ? <button onClick={this.handleClickBench} value={startTeam[i].player_id}>Bench</button> : <></>}</TableCell>
                                                <TableCell>{startTeam[i] ? <button onClick={this.handleClickRelease} value={startTeam[i].player_id}>Release</button> : <></>}</TableCell>
                                            </TableRow>
                                        ))

                                    }
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