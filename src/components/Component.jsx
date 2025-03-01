import React from 'react';
import { Link } from 'react-router';

// CSS
import "../styles/Component.css";

// Boxicons
import "boxicons";

function Component({ table }) {
    return (
        <table cellSpacing="0">
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Phone</th>
                <th colSpan={2}>Website</th>
            </tr>
            {table.map((object) => (
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

export default Component;