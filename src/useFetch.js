import { useState, useEffect } from 'react';

// you can add url endpoint so we can use it in different components'
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
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
            // whenever url gets changed, useEffect function will be ran'
            return () => console.log('cleanup')
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;