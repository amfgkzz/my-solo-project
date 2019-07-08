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
        let benchTeam = this.props.reduxState.userTeamBench;
        let startTeam = this.props.reduxState.userTeamStart;
        return (
            <>
                <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre>
                {/* {
        "id": 54,
        "team_name": "2",
        "player_id": "879c1c06-3c62-40f3-8bf0-5dbd476f90d3",
        "player_first_name": "Brian",
        "player_last_name": "Hoyer",
        "player_position": "QB"
      } */}
                {
                    startTeam.length >= 0
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
                                        <TableCell>{ startTeam[0] ? startTeam[0].player_position : <div style={{ opacity: '0.5' }}>QB</div>}</TableCell>
                                        <TableCell>{ startTeam[0] ? startTeam[0].player_first_name : <></>} { startTeam[0] ? startTeam[0].player_last_name : <></>}</TableCell>
                                        <TableCell>{ startTeam[0] ? <button onClick={this.handleClickBench} value={startTeam[0].player_id}>Bench</button> : <></>}</TableCell>
                                        <TableCell>{ startTeam[0] ? <button onClick={this.handleClickRelease} value={startTeam[0].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{ startTeam[1] ? startTeam[1].player_position : <div style={{ opacity: '0.5' }}>RB ONE</div>}</TableCell>
                                        <TableCell>{ startTeam[1] ? startTeam[1].player_first_name : <></>} { startTeam[1] ? startTeam[1].player_last_name : <></>}</TableCell>
                                        <TableCell>{ startTeam[1] ? <button onClick={this.handleClickBench} value={startTeam[1].player_id}>Bench</button> : <></>}</TableCell>
                                        <TableCell>{ startTeam[1] ? <button onClick={this.handleClickRelease} value={startTeam[1].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{ startTeam[2] ? startTeam[2].player_position : <div style={{ opacity: '0.5' }}>RB TWO</div>}</TableCell>
                                        <TableCell>{ startTeam[2] ? startTeam[2].player_first_name : <></>} { startTeam[2] ? startTeam[2].player_last_name : <></>}</TableCell>
                                        <TableCell>{ startTeam[2] ? <button onClick={this.handleClickBench} value={startTeam[2].player_id}>Bench</button> : <></>}</TableCell>
                                        <TableCell>{ startTeam[2] ? <button onClick={this.handleClickRelease} value={startTeam[2].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{ startTeam[3] ? startTeam[3].player_position : <div style={{ opacity: '0.5' }}>WR ONE</div>}</TableCell>
                                        <TableCell>{ startTeam[3] ? startTeam[3].player_first_name : <></>} { startTeam[3] ? startTeam[3].player_last_name : <></>}</TableCell>
                                        <TableCell>{ startTeam[3] ? <button onClick={this.handleClickBench} value={startTeam[3].player_id}>Bench</button> : <></>}</TableCell>
                                        <TableCell>{ startTeam[3] ? <button onClick={this.handleClickRelease} value={startTeam[3].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{ startTeam[4] ? startTeam[4].player_position : <div style={{ opacity: '0.5' }}>WR TWO</div>}</TableCell>
                                        <TableCell>{ startTeam[4] ? startTeam[4].player_first_name : <></>} { startTeam[4] ? startTeam[4].player_last_name : <></>}</TableCell>
                                        <TableCell>{ startTeam[4] ? <button onClick={this.handleClickBench} value={startTeam[4].player_id}>Bench</button> : <></>}</TableCell>
                                        <TableCell>{ startTeam[4] ? <button onClick={this.handleClickRelease} value={startTeam[4].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{ startTeam[5] ? startTeam[5].player_position : <div style={{ opacity: '0.5' }}>TE</div>}</TableCell>
                                        <TableCell>{ startTeam[5] ? startTeam[5].player_first_name : <></>} { startTeam[5] ? startTeam[5].player_last_name : <></>}</TableCell>
                                        <TableCell>{ startTeam[5] ? <button onClick={this.handleClickBench} value={startTeam[5].player_id}>Bench</button> : <></>}</TableCell>
                                        <TableCell>{ startTeam[5] ? <button onClick={this.handleClickRelease} value={startTeam[5].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{ startTeam[6] ? startTeam[6].player_position : <div style={{ opacity: '0.5' }}>FLEX</div>}</TableCell>
                                        <TableCell>{ startTeam[6] ? startTeam[6].player_first_name : <></>} { startTeam[6] ? startTeam[6].player_last_name : <></>}</TableCell>
                                        <TableCell>{ startTeam[6] ? <button onClick={this.handleClickBench} value={startTeam[6].player_id}>Bench</button> : <></>}</TableCell>
                                        <TableCell>{ startTeam[6] ? <button onClick={this.handleClickRelease} value={startTeam[6].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{ startTeam[7] ? startTeam[7].player_position : <div style={{ opacity: '0.5' }}>DEF</div>}</TableCell>
                                        <TableCell>{ startTeam[7] ? startTeam[7].player_first_name : <></>} { startTeam[7] ? startTeam[7].player_last_name : <></>}</TableCell>
                                        <TableCell>{ startTeam[7] ? <button onClick={this.handleClickBench} value={startTeam[7].player_id}>Bench</button> : <></>}</TableCell>
                                        <TableCell>{ startTeam[7] ? <button onClick={this.handleClickRelease} value={startTeam[7].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{ startTeam[8] ? startTeam[8].player_position : <div style={{ opacity: '0.5' }}>K</div>}</TableCell>
                                        <TableCell>{ startTeam[8] ? startTeam[8].player_first_name : <></>} { startTeam[8] ? startTeam[8].player_last_name : <></>}</TableCell>
                                        <TableCell>{ startTeam[8] ? <button onClick={this.handleClickBench} value={startTeam[8].player_id}>Bench</button> : <></>}</TableCell>
                                        <TableCell>{ startTeam[8] ? <button onClick={this.handleClickRelease} value={startTeam[8].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </>
                        :
                        <></>
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
                                    <TableRow>
                                        <TableCell>{benchTeam[0] ? benchTeam[0].player_position : <div style={{ opacity: '0.5' }}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[0] ? benchTeam[0].player_first_name : <></>} {benchTeam[0] ? benchTeam[0].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[0] ? <button onClick={this.handleClickStart} value={benchTeam[0].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[0] ? <button onClick={this.handleClickRelease} value={benchTeam[0].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[1] ? benchTeam[1].player_position : <div style={{ opacity: '0.5' }}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[1] ? benchTeam[1].player_first_name : <></>} {benchTeam[1] ? benchTeam[1].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[1] ? <button onClick={this.handleClickStart} value={benchTeam[1].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[1] ? <button onClick={this.handleClickRelease} value={benchTeam[1].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[2] ? benchTeam[2].player_position : <div style={{ opacity: '0.5' }}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[2] ? benchTeam[2].player_first_name : <></>} {benchTeam[2] ? benchTeam[2].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[2] ? <button onClick={this.handleClickStart} value={benchTeam[2].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[2] ? <button onClick={this.handleClickRelease} value={benchTeam[2].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[3] ? benchTeam[3].player_position : <div style={{ opacity: '0.5' }}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[3] ? benchTeam[3].player_first_name : <></>} {benchTeam[3] ? benchTeam[3].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[3] ? <button onClick={this.handleClickStart} value={benchTeam[3].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[3] ? <button onClick={this.handleClickRelease} value={benchTeam[3].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[4] ? benchTeam[4].player_position : <div style={{ opacity: '0.5' }}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[4] ? benchTeam[4].player_first_name : <></>} {benchTeam[4] ? benchTeam[4].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[4] ? <button onClick={this.handleClickStart} value={benchTeam[4].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[4] ? <button onClick={this.handleClickRelease} value={benchTeam[4].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[5] ? benchTeam[5].player_position : <div style={{ opacity: '0.5' }}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[5] ? benchTeam[5].player_first_name : <></>} {benchTeam[5] ? benchTeam[5].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[5] ? <button onClick={this.handleClickStart} value={benchTeam[5].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[5] ? <button onClick={this.handleClickRelease} value={benchTeam[5].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[6] ? benchTeam[6].player_position : <div style={{ opacity: '0.5' }}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[6] ? benchTeam[6].player_first_name : <></>} {benchTeam[6] ? benchTeam[6].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[6] ? <button onClick={this.handleClickStart} value={benchTeam[6].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[6] ? <button onClick={this.handleClickRelease} value={benchTeam[6].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[7] ? benchTeam[7].player_position : <div style={{ opacity: '0.5' }}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[7] ? benchTeam[7].player_first_name : <></>} {benchTeam[7] ? benchTeam[7].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[7] ? <button onClick={this.handleClickStart} value={benchTeam[7].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[7] ? <button onClick={this.handleClickRelease} value={benchTeam[7].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[8] ? benchTeam[8].player_position : <div style={{ opacity: '0.5' }}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[8] ? benchTeam[8].player_first_name : <></>} {benchTeam[8] ? benchTeam[8].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[8] ? <button onClick={this.handleClickStart} value={benchTeam[8].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[8] ? <button onClick={this.handleClickRelease} value={benchTeam[8].player_id}>Release</button> : <></>}</TableCell>
                                    </TableRow>
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