import React, { Component } from 'react';
import { connect } from 'react-redux';

// material ui
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class PlayerList extends Component {

    state = {
        start: 0,
        end: 9,
        target: '',
    }

    componentDidMount() {
        this.fetchPlayerList();
    }

    fetchPlayerList = () => {
        this.props.dispatch({ type: 'FETCH_PLAYERLIST_DATA' });
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState({
            start: 0,
            end: 9,
            target: e.target.name,
        }, () => {
            this.props.dispatch(
                { type: 'UPDATE_PLAYERLIST_DATA', payload: this.state.target }
            )
        });
    }

    handlePrevious = (e) => {
        e.preventDefault();
        let startCount = this.state.start;
        let endCount = this.state.end;
        if (startCount === 0) {
            this.setState({
                start: 36,
                end: 45,
            });
        } else {
            this.setState({
                start: startCount - 9,
                end: endCount - 9,
            });
        }
    }

    handleNext = (e) => {
        e.preventDefault();
        let startCount = this.state.start;
        let endCount = this.state.end;
        if (endCount > this.props.reduxState.playerList.length) {
            this.setState({
                start: 0,
                end: 9,
            });
        } else {
            this.setState({
                start: startCount + 9,
                end: endCount + 9,
            });
        }
    }

    render() {
        let playerList = this.props.reduxState.playerList;
        return (
            <>
                <pre>
                    {JSON.stringify(this.state, null, 2)}
                </pre>

                <div style={{ textAlign: 'center' }}>

                    <button onClick={this.handleClick} name="QB">QB</button>
                    <button onClick={this.handleClick} name="RB">RB</button>
                    <button onClick={this.handleClick} name="WR">WR</button>
                    <button onClick={this.handleClick} name="TE">TE</button>
                    <button onClick={this.handleClick} name="K">K</button>

                    <br />

                    <div className="pagination">
                        <button onClick={this.handlePrevious}>&laquo;Previous</button>
                        <button onClick={this.handleNext}>Next&raquo;</button>
                    </div>

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
                        {playerList.slice(this.state.start, this.state.end).map((player, i) => (<TableRow key={i}>
                            <TableCell>{player.position}</TableCell>
                            <TableCell>{player.first_name} {player.last_name}</TableCell>
                            <TableCell>{player.name}</TableCell>
                        </TableRow>))}
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