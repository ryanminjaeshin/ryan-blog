<<<<<<< HEAD
import BlogList from './BlogList';
import useFetch from './useFetch';
=======
import BlogList from "./BlogList";
import useFetch from "./useFetch";
>>>>>>> b70582b3d950d184b3b9102565b06e37baeed716

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}

export default Home;

