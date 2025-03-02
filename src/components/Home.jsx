import React, { useState, useEffect } from 'react';

// Table
import Component from './Component';
import useFetch from "../hooks/useFetch";

function Home() {
    const load = {
        fontWeight: "bold",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }

    const { database, loading } = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) {
        return <div style={load}>Loading...</div>
    } else {
        return <Component table={database} />
    }
}

export default Home