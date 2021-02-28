const Create = () => {
  return (
    <dlv className="create">
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input
          type="text"
          required
        />
        <label>Blog body:</label>
        <textarea
          required
        />
        <label>Blog author:</label>
        <select>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </dlv>
  );
}

export default Create;