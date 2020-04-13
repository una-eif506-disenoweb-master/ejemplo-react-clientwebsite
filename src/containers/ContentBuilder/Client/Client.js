import React from 'react';

const client = (props) => (
    <tr>
        <td>1</td>
        <td>{props.name}</td>
        <td>{props.username}</td>
        <td>{props.email}</td>
    </tr>
);

export default client;