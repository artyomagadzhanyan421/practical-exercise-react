import React from 'react';
import { data, useParams } from 'react-router';

import useFetch from '../hooks/useFetch';

// CSS
import "../styles/Component.css";

function Data() {
    const load = {
        fontWeight: "bold",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const { id } = useParams();

    const { database, loading } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    document.title = `Loading...`;

    if (loading) {
        return <div style={load}>Loading...</div>
    } else {
        document.title = `${database.name}`

        return (
            <table cellSpacing="0">
                <th colSpan={2}><center>{database.name}</center></th>
                <tr>
                    <td>Name</td>
                    <td>{database.name}</td>
                </tr>
                <tr>
                    <td>Username</td>
                    <td>{database.username}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{database.email}</td>
                </tr>
                <tr>
                    <td>Street</td>
                    <td>{database.address.street}</td>
                </tr>
                <tr>
                    <td>Suite</td>
                    <td>{database.address.suite}</td>
                </tr>
                <tr>
                    <td>City</td>
                    <td>{database.address.city}</td>
                </tr>
                <tr>
                    <td>Zipcode</td>
                    <td>{database.address.zipcode}</td>
                </tr>
            </table>
        )
    }

}

export default Data