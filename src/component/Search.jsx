function Search({ handleSearch }) {
  return (
    <>
      
      <input
        type="text"
        placeholder=""
        className="form-control icono-placeholder"
        onChange={handleSearch}
      />
    </>
  );
}

export default Search;
