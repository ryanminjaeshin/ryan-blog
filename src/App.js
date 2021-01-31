import './App.css';
import Navbar from './Navbar';

function App() {
  // we can output numbers, strings, and arrays but not object

  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = 'http://www.google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
      </div>
    </div>
  );
}

export default App;
