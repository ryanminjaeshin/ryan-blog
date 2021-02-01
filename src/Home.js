import { useState } from 'react';

const Home = () => {
    
    // let name = 'Ryan';
    const [name, setName] = useState('Ryan');
    const [age, setAge] = useState('30')

    const handleClick = () => {
        setName('Minjae');
        setAge(31)
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={ handleClick }>Click me</button>  
        </div>
    );
}
 
export default Home;