import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Dummy.css';

// material ui
import {
    AppBar, Card, Grid,
    ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Table, TableHead,
    TableBody, TableRow, TableCell, Typography
} from '@material-ui/core';

class Dummy extends Component {

    render() {

        return (
            <>
                <AppBar
                    position="relative"
                    color="secondary"
                    style={{ boxShadow: 'none', fontSize: '16pt' }}>
                    Home
                </AppBar>

                <div className="dummy-container">

                    <Grid container spacing={2}>

                        <Grid item xs={4}>

                            <Card>

                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>test</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Test2</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>

                            </Card>

                        </Grid>

                        <Grid item xs={4}>

                            <Card>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>test</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Test2</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Card>

                        </Grid>

                    </Grid>

                </div>

                <div>

                    <Grid container spacing={2}>

                        <Grid item xs={8}>

                            <Grid item xs={4}>

                                <Card>

                                    <ExpansionPanel>

                                        <ExpansionPanelSummary>

                                            <Typography>
                                                Hi
                                            </Typography>

                                        </ExpansionPanelSummary>

                                        <ExpansionPanelDetails>

                                            <Typography>
                                                Hello
                                            </Typography>

                                        </ExpansionPanelDetails>

                                    </ExpansionPanel>

                                </Card>

                            </Grid>

                        </Grid>

                    </Grid>

                </div>


            </>
        )
    }
}

export default connect()(Dummy);