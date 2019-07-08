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
        console.log('bench');
    }

    handleClickRelease = (e) => {
        console.log('release');
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
                    startTeam.length >= 1
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
                                        <TableCell>{startTeam[0].player_position}</TableCell>
                                        <TableCell>{startTeam[0].player_first_name} {startTeam[0].player_last_name}</TableCell>
                                        <TableCell><button onClick={this.handleClickBench}>Bench</button></TableCell>
                                        <TableCell><button onClick={this.handleClickRelease}>Release</button></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </>
                        :
                        <></>
                }

                {
                    benchTeam.length >= 1
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
                                        <TableCell>{benchTeam[0] ? benchTeam[0].player_position : <div style={{opacity: '0.5'}}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[0] ? benchTeam[0].player_first_name : <></>} {benchTeam[0] ? benchTeam[0].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[0] ? <button onClick={this.handleClickStart} value={benchTeam[0].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[0] ? <button onClick={this.handleClickRelease}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[1] ? benchTeam[1].player_position : <div style={{opacity: '0.5'}}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[1] ? benchTeam[1].player_first_name : <></>} {benchTeam[1] ? benchTeam[1].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[1] ? <button onClick={this.handleClickStart} value={benchTeam[1].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[1] ? <button onClick={this.handleClickRelease}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[2] ? benchTeam[2].player_position :<div style={{opacity: '0.5'}}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[2] ? benchTeam[2].player_first_name : <></>} {benchTeam[2] ? benchTeam[2].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[2] ? <button onClick={this.handleClickStart} value={benchTeam[2].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[2] ? <button onClick={this.handleClickRelease}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[3] ? benchTeam[3].player_position : <div style={{opacity: '0.5'}}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[3] ? benchTeam[3].player_first_name : <></>} {benchTeam[3] ? benchTeam[3].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[3] ? <button onClick={this.handleClickStart} value={benchTeam[3].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[3] ? <button onClick={this.handleClickRelease}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[4] ? benchTeam[4].player_position : <div style={{opacity: '0.5'}}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[4] ? benchTeam[4].player_first_name : <></>} {benchTeam[4] ? benchTeam[4].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[4] ? <button onClick={this.handleClickStart} value={benchTeam[4].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[4] ? <button onClick={this.handleClickRelease}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[5] ? benchTeam[5].player_position : <div style={{opacity: '0.5'}}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[5] ? benchTeam[5].player_first_name : <></>} {benchTeam[5] ? benchTeam[5].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[5] ? <button onClick={this.handleClickStart} value={benchTeam[5].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[5] ? <button onClick={this.handleClickRelease}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[6] ? benchTeam[6].player_position : <div style={{opacity: '0.5'}}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[6] ? benchTeam[6].player_first_name : <></>} {benchTeam[6] ? benchTeam[6].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[6] ? <button onClick={this.handleClickStart} value={benchTeam[6].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[6] ? <button onClick={this.handleClickRelease}>Release</button> : <></>}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>{benchTeam[7] ? benchTeam[7].player_position : <div style={{opacity: '0.5'}}>Bench</div>}</TableCell>
                                        <TableCell>{benchTeam[7] ? benchTeam[7].player_first_name : <></>} {benchTeam[7] ? benchTeam[7].player_last_name : <></>}</TableCell>
                                        <TableCell>{benchTeam[7] ? <button onClick={this.handleClickStart} value={benchTeam[7].player_id}>Start</button> : <></>}</TableCell>
                                        <TableCell>{benchTeam[7] ? <button onClick={this.handleClickRelease}>Release</button> : <></>}</TableCell>
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