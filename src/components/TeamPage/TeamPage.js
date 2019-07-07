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
    }

    render() {
        return (
            <>
                <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre>

                {/* {
        "id": 33,
        "team_name": "123",
        "player_id": "bb44c92c-8cf5-4f7a-8ade-b8c14588ef9b",
        "player_first_name": "Garrett",
        "player_last_name": "Gilbert",
        "player_position": "QB"
      }, */}

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Position</TableCell>
                            <TableCell>Player Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.reduxState.createdTeam.map(player =>
                            (<TableRow>
                                <TableCell>{player.player_position}</TableCell>
                                <TableCell>{player.player_first_name} {player.player_last_name}</TableCell>
                            </TableRow>)
                        )}
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