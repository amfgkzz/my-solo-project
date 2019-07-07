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
        this.props.dispatch({ type: 'GET_USER_PLAYERS' });
    }

    render() {
        return (
            <>
                <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre>

                <label>Team</label>
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
                        {this.props.reduxState.userTeam.map(player =>
                            (<TableRow>
                                <TableCell>{player.player_position}</TableCell>
                                <TableCell>{player.player_first_name} {player.player_last_name}</TableCell>
                                <TableCell><button>Bench</button></TableCell>
                                <TableCell><button>Release</button></TableCell>
                            </TableRow>)
                        )}
                    </TableBody>
                </Table>

                <label>Bench</label>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Position</TableCell>
                            <TableCell>Player Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                    </TableBody>
                </Table>

            </>
        )
    }
}

const mapStateToRedux = reduxState => ({
    reduxState,
});

export default connect(mapStateToRedux)(TeamPage);