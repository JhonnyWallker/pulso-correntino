import "./Head.css";
import DateFormat from "./DateFormat";
import Search from "./Search";

function Head({ handleSearch }) {
  return (
    <>
      <div className="container d-flex justify-content-between">
        <a href="/">
          <img
            className="logo fondo-transparente d-none d-sm-block"
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1706189320/pulso-correntino_ql3ini.png"
            title="Pulso Correntino"
          />
        </a>
        <form className="d-none d-sm-block m-3">
          <Search handleSearch={handleSearch} />
        </form>
      </div>
      {/* vista responsive */}
      <div className="container d-flex justify-content-center">
        <a href="/">
          <img
            className="logo d-block d-sm-none"
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1706189320/pulso-correntino_ql3ini.png"
            title="Pulso Correntino"
          />
        </a>
      </div>
    </>
  );
}

export default Head;
