import React from 'react'
import axios from 'axios'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add'

class adminMembers extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            adminMembers: []
        }
    }


    componentDidMount() {
        // fetch('http://localhost:8080/users')
        //     .then(res => res.json())
        //     .then(result => {
        //         this.setState({
        //             adminMembers: result
        //         })

        //         console.log(this.state.adminMembers)
        //     })

        axios.get('http://localhost:8080/users').then(res => {
            this.setState({
                adminMembers: res.data
            })

            console.log(this.state.adminMembers)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h2>Registered Members</h2>
                <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    style={{ marginBottom: '10px', backgroundColor: '#8bc34a' }}
                    startIcon={<AddIcon></AddIcon>}
                >
                    Add New Member
                </Button>

                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead style={{ backgroundColor: '#424242' }}>
                            <TableRow >
                                <TableCell style={{ color: 'white' }}>Name</TableCell>
                                <TableCell style={{ color: 'white' }}>Email</TableCell>
                                <TableCell style={{ color: 'white' }}>Age</TableCell>
                                <TableCell style={{ color: 'white' }}>Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.adminMembers.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell >{row.email}</TableCell>
                                    <TableCell >{row.age}</TableCell>
                                    <TableCell >{row.address}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

export default adminMembers