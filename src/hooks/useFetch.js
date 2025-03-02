import React from 'react';
import { useState, useEffect } from 'react';
import { data } from 'react-router';

function useFetch(url) {
    const [database, setDatabase] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDatabase(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [url]);

    return { database, loading };
}

export default useFetch