import React, {Component} from 'react';
import {Table}  from 'react-bootstrap';
import Aux from '../../../hoc/Aux'
import axios from 'axios';
import Client from './Client'

class ClientList extends Component {
    state = {
        clients: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({clients: response.data});
                console.log(response);
            });
    }

    render() {
        const clients = this.state.clients.map((client, index) => {
            return <Client key={index} id={client.id} name={client.name}
                           username={client.username} email={client.email} />
        });
        return (
            <Aux>
                <h1>Lista de Clientes</h1>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients}
                    </tbody>
                </Table>
            </Aux>
        );
    }
}

export default ClientList;