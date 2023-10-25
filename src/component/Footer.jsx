import "./Footer.css";
import Redes from "./Redes";
import Copyright from "./Copyright";

function Footer() {
  return (
    <div className="container fondo-transparente pt-1">
      <img
        className="img-logo-footer fondo-transparente"
        src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1698117742/al-detalle_axi2pa.png"
        title="al detalle"
      />
      <div className="fondo-transparente mb-3 text-white d-flex justify-content-end">
        <Redes />
      </div>
      <div className="container">
        <hr className="p-0 m-0" />
      </div>
      <div className="bg-dark text-light text-center txt-size">
        <Copyright />
      </div>
    </div>
  );
}

export default Footer;
