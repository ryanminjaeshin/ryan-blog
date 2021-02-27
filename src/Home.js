import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

<<<<<<< HEAD
    const [blogs, setBlogs] = useState(null);
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
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    }, []);
=======
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
>>>>>>> 574e8ccf8cd767af3452cb409b8b846dd654b4fe

    return (
        <div className="home">
            {error && <div> { error } </div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title = 'All Blogs!' />}
            {/* <button onClick={() => setName('luigi')}>change name></button>
            <p>{name}</p> */}
        </div>
    );
}

export default Home;