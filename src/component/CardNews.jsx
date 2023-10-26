import "./CardNews.css";
import { Link } from "react-router-dom";

function CardNews({ news }) {
  return (
    <>
      {news.map((newsapi) => (
        <Link
          reloadDocument
          to={`/noticias/${newsapi._id}`}
          key={newsapi._id}
          title={newsapi.title}
          className="card cardContainer align-top"
        >
          <img src={newsapi.image_url} alt={newsapi.title} />
          <h6 className="categoria fondo-transparente">
            <em>{newsapi.category}</em>
          </h6>
          <h5 className="titulo fondo-transparente">{newsapi.title}</h5>
          <p className="description fondo-transparente m-2">
            {newsapi.description}
          </p>
        </Link>
      ))}
    </>
  );
}

export default CardNews;
