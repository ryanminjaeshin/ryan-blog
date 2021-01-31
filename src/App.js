import Navbar from './Navbar';
import Home from './Home';

function App() {
  // we can output numbers, strings, and arrays but not object

  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = 'http://www.google.com';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
