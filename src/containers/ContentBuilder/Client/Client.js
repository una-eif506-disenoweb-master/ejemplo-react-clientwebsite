import React from 'react';

const client = (props) => (
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.username}</td>
        <td>{props.email}</td>
    </tr>
);

export default client;