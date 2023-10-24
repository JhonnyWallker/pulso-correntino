function NavBar() {
  return (
    <>
      <nav className="navbar bg-green-apple">
        <div className="container bg-green-apple d-flex justify-content-center">
          <div className="bg-green-apple m-0">
            <div className="bg-green-apple">
              <a className="navbar-brand fs-6 bg-green-apple " href="/">
                Portada
              </a>
              <a className="navbar-brand fs-6 bg-green-apple " href="#">
                Política
              </a>
              <a className="navbar-brand fs-6 bg-green-apple " href="#">
                Economía
              </a>
              <a className="navbar-brand fs-6 bg-green-apple " href="#">
                Sociedad
              </a>
              <a className="navbar-brand fs-6 bg-green-apple " href="#">
                Educación
              </a>
              <a className="navbar-brand fs-6 bg-green-apple " href="#">
                Deporte
              </a>
              <a className="navbar-brand fs-6 bg-green-apple " href="#">
                Turismo
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
