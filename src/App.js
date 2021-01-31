import './App.css';

function App() {
  // we can output numbers, strings, and arrays but not object

  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = 'http://www.google.com';

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Liked { likes } times </p>

        <p>{ 10 }</p>
        <p>{'hello, Ryan'}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{ Math.random() * 20}</p>

        <a href={ link }>Google Site</a>
      </div>
    </div>
  );
}

export default App;
