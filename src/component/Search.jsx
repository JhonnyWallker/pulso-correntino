function Search({ handleSearch }) {
  return (
    <>
      
      <input
        type="text"
        // placeholder=""
        placeholder="Buscar en Pulso Correntino"
        className="form-control input icono-placeholder"
        title="Buscar"
        onChange={handleSearch}
      />
    </>
  );
}

export default Search;
