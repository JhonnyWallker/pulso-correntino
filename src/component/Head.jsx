import "./Head.css";
import DateFormat from "./DateFormat";
import Search from "./Search";


function Head({ handleSearch }) {
  return (
    <>
      <div className="container d-flex justify-content-between fondo-transparente">
        <a
          href="/"
          className="fondo-transparente d-flex justify-content-center"
        >
          <img
            className="logo fondo-transparente d-none d-sm-block"
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1698117742/al-detalle_axi2pa.png"
            title="al detalle"
          />
        </a>
        <form className="fondo-transparente d-none d-sm-block m-3">
          <Search handleSearch={handleSearch} />
        </form>
      </div>

      <div className="container d-flex justify-content-center fondo-transparente">
        <a
          href="/"
          className="fondo-transparente d-flex justify-content-center"
        >
          <img
            className="logo fondo-transparente d-block d-sm-none"
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1698117742/al-detalle_axi2pa.png"
            title="al detalle"
          />
        </a>

      </div>
    </>
  );
}

export default Head;
