import "./Footer.css";
import Redes from "./Redes";

function Footer() {
  return (
    <div className="container fondo-transparente pt-1">
      <div className="row fondo-transparente d-flex justify-content-between">
        <div className="col-10 fondo-transparente">
          <img
            className="img-logo-footer fondo-transparente"
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1698117742/al-detalle_axi2pa.png"
            title="al detalle"
          />
        </div>

        <div className="col-2 fondo-transparente mb-3 text-white d-none d-sm-block">
          <Redes />
        </div>
      </div>

      <div className="container">
        <hr className="p-0 m-0" />
      </div>

    </div>
  );
}

export default Footer;
