import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

// CSS
import "../styles/Component.css";

// Boxicons
import "boxicons"

function Component() {
    const load = {
        fontWeight: "bold",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const [database, setDatabase] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => {
                setDatabase(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    if (loading) {
        return <div style={load}>Loading...</div>
    } else {
        return (
            <table cellSpacing="0">
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th colSpan={2}>Website</th>
                </tr>
                {database.map((object) => (
                    <tr key={object.id}>
                        <td>{object.name}</td>
                        <td>{object.username}</td>
                        <td>{object.phone}</td>
                        <td>
                            <a href={object.website} target='_blank'>
                                <span>{object.website}</span>
                                <box-icon name='link-external' color="#3B82F6" size="20px"></box-icon>
                            </a>
                        </td>
                        <td>
                            <Link to={`/user/${object.id}`}>
                                <span>Details</span>
                            </Link>
                        </td>
                    </tr>
                ))}
            </table>
        );
    }

}

export default Component;