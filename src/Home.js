const Home = () => {
    
    const handleClick = () => {
        console.log('hello, folks');
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={ handleClick }>Click me</button>  
            <button onClick={(e) => handleClickAgain('Ryan', e)}>Click me again</button>
        </div>
    );
}
 
export default Home;