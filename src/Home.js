import { useState } from 'react';

const Home = () => {
    
    // let name = 'Ryan';
    const [name, setName] = useState('Ryan');

    const handleClick = () => {
        setName('Minjae');
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={ handleClick }>Click me</button>  
        </div>
    );
}
 
export default Home;