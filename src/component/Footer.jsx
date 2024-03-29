import "./Footer.css";
import Redes from "./Redes";
import Copyright from "./Copyright";

function Footer() {
  return (
    <div className="container pt-1">
      <div className="d-flex justify-content-center">
        <img
          className="img-logo-footer"
          src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1706189320/pulso-correntino_ql3ini.png"
          title="Pulso Correntino"
        />
      </div>

      <hr className="container text-white mt-5" />
      <div className="mb-3 text-white d-flex justify-content-center">
        <Redes />
      </div>

      <div className="bg-dark text-light text-center txt-size">
        <Copyright />
      </div>
    </div>
  );
}

export default Footer;
