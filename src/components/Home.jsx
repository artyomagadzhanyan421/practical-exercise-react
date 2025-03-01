import React, { useState, useEffect } from 'react';

// Table
import Component from './Component';

function Home() {
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
        return <Component table={database} />
    }
}

export default Home