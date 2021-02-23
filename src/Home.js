import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    //   const [name, setName] = useState('mario');

    // const handleDelete = id => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // It is going to run every time there is re-render (Anytime, the data gets changed)
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setBlogs(data);
                setIsPending(false);
            });
    }, []);

    return (
        <div className="home">
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title = 'All Blogs!' />}
            {/* <button onClick={() => setName('luigi')}>change name></button>
            <p>{name}</p> */}
        </div>
    );
}

export default Home;