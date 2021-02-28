import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const blog = { title, body, author };

    // Appears loading... message when it's loading
    setIsPending(true);

    // Second argument is the type of request
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(blog)
    })
    .then(() => {
      console.log('New blog added')
      // Appears loading... message when it's loading
      setIsPending(false);
    })
  }

  return (
    <dlv className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding blog...</button>}
      </form>
    </dlv>
  );
}

export default Create;