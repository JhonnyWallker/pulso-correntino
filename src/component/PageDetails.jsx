import { useParams } from "react-router-dom";
import * as Api from "../services/News";
import { useState, useEffect } from "react";
import "./PageDetails.css";

function PageDetails() {
  const [noticia, setNoticia] = useState({});

  const params = useParams();

  useEffect(() => {
    Api.getNewsById(params.id)
      .then(setNoticia)

      .catch(console.log);
  }, [params]);

  return (
    <>
      <div className="container position-relative mb-5 mt-5">
        <h5 className="text-green-apple">{noticia.category}</h5>
        <h3 className="mb-5">{noticia.title}</h3>
        <hr />
        <img
          className="w-img fixed container mt-5 d-flex justify-content-center"
          src={noticia.image_url}
          alt={noticia.title}
        />
        
        <div className="m-2">
          <p className="text-secondary fs-5 mb-5">
            <i>{noticia.description}</i>
          </p>
          <p className="lh-lg text-start fs-5 textoP">{noticia.content}</p>
        </div>
        
      </div>
    </>
  );
}

export default PageDetails;
