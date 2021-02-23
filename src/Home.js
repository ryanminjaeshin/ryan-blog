import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlogs] = useState(null);

      const [name, setName] = useState('mario');

    const handleDelete = id => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // It is going to run every time there is re-render (Anytime, the data gets changed)
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            })
    }, []);

    return (
        <div className="home">
            {/* <BlogList blogs = {blogs} title = 'All Blogs!' handleDelete = {handleDelete}/>
            <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario' )} title = "Mario's Blogs!" handleDelete = {handleDelete}/> */}
            <button onClick={() => setName('luigi')}>change name></button>
            <p>{name}</p>
        </div>
    );
}

export default Home;