import "./Head.css";
import DateFormat from "./DateFormat";
import Search from "./Search";
import Redes from "./Redes";

function Head({ handleSearch }) {
  return (
    <>
      
      <div className="fondo-transparente mb-3">
        <a
          href="/"
          className="fondo-transparente d-flex justify-content-center"
        >
          <img
            className="logo fondo-transparente"
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1698117742/al-detalle_axi2pa.png"
            title="que se vea"
          />
        </a>
        <div className="fs-5 text-center fondo-transparente">
          <DateFormat />
        </div>
      </div>
      <form className="fondo-transparente d-none d-sm-block">
        <Search handleSearch={handleSearch} />
      </form>
    </>
  );
}

export default Head;
