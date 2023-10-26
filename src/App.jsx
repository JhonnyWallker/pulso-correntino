import "./App.css";
import * as Api from "./services/News";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardNews from "./component/CardNews";
import PageDetails from "./component/PageDetails";
import Head from "./component/Head";
import NavBar from "./component/NavBar";
import PageNotFound from "./component/PageNotFound";
import Footer from "./component/Footer";

function App() {
  //allNews
  const [news, setNews] = useState([]);

  useEffect(() => {
    Api.getAllNews().then(setNews);
  }, []);

  const [search, setSearch] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //filter
  let results = [];
  if (search === undefined) {
    results = news;
  } else {
    results = news.filter((news) =>
      news.description.toLowerCase().includes(search)
    );
  }

  return (
    <main className="App">
      <header className="fixed-top bg-white">
        <Head handleSearch={handleSearch} />
        <NavBar />
      </header>
      {/* <div className="d-flex justify-content-center container-banner-big">
        <img
          src="https://corrienteshabla.com.ar/wp-content/uploads/2023/05/ctes_somos_todos.gif"
          alt="Corrientes somos todos"
          className="banner-big"
        />
      </div> */}

      <section className="container mtS">
        <Router>
          <Routes>
            <Route path="/" element={<CardNews news={results} />} />
            <Route path="/noticias/:id" element={<PageDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </section>
      <section className="bg-dark">
        <Footer news={news} />
      </section>
    </main>
  );
}

export default App;
