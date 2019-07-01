import React, { Component } from 'react';
import { connect } from 'react-redux';

// material ui
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class PlayerList extends Component {

    componentDidMount() {
        this.fetchPlayerList();
    }

    fetchPlayerList = () => {
        this.props.dispatch({ type: 'FETCH_PLAYERLIST_DATA' });
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.dispatch(
            { type: 'UPDATE_PLAYERLIST_DATA', payload: e.target.name }
        );
    }

    handlePrevious = (e) => {
        e.preventDefault();
        console.log('testback');
    }

    handleNext = (e) => {
        e.preventDefault();
        console.log('testforward');
    }

    render() {
        let playerList = this.props.reduxState.playerList;
        return (
            <>

                <div style={{ textAlign: 'center' }}>
                    <button onClick={this.handleClick} name="QB">QB</button>
                    <button onClick={this.handleClick} name="RB">RB</button>
                    <button onClick={this.handleClick} name="WR">WR</button>
                    <button onClick={this.handleClick} name="TE">TE</button>
                    <button onClick={this.handleClick} name="K">K</button>
                    <br />
                    <button onClick={this.handlePrevious}>&#8249;</button>
                    <button onClick={this.handleNext}>&#8250;</button>
                </div>

                {/* Make table nicer <-- stretch */}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Position</TableCell>
                            <TableCell>Player</TableCell>
                            <TableCell>Team</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {playerList.length > 1 ? playerList.map((player, i) => (<TableRow key={i}>
                            <TableCell>{player.position}</TableCell>
                            <TableCell>{player.first_name} {player.last_name}</TableCell>
                            <TableCell>{player.name}</TableCell>
                        </TableRow>)) : <></>}
                    </TableBody>
                </Table>

                <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre>
            </>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState
});

export default connect(mapStateToProps)(PlayerList);