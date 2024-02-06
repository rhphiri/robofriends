function Searchbox({ onChange }) {
  return (
    <input
      type="search"
      placeholder="search robots"
      className="border border-success rounded"
      onChange={onChange}
    />
  );
}

export default Searchbox;
