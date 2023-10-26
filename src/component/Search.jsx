function Search({ handleSearch }) {
  return (
    <>
      
      <input
        type="text"
        // placeholder=""
        placeholder="Buscar en Corrientes al detalle"
        className="form-control input icono-placeholder"
        onChange={handleSearch}
      />
    </>
  );
}

export default Search;
