import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  const handleSubmit = e => {
    e.preventDefault();
    const blog = { title, body, author };

    // Second argument is the type of request
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(blog)
    })
    .then(() => {
      console.log('New blog added')
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
        <button>Add Blog</button>
      </form>
    </dlv>
  );
}

export default Create;