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
                    benchTeam.length && startTeam.length >= 1
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
                                        <TableCell>{benchTeam[0].player_position}</TableCell>
                                        <TableCell>{benchTeam[0].player_first_name} {benchTeam[0].player_last_name}</TableCell>
                                        <TableCell><button onClick={this.handleClickStart} value={benchTeam[0].player_id}>Start</button></TableCell>
                                        <TableCell><button onClick={this.handleClickRelease}>Release</button></TableCell>
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