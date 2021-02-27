import { useState, useEffect } from 'react';

const useFetch = () => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok) {
                    throw Error('could not fetch the data for that resource')
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);

    return { data, isPending, error }
}

export default useFetch;