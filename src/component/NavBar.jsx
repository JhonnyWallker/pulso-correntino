import DateFormat from "./DateFormat";

function NavBar() {
  return (
    <nav className="navbar bg-green-apple">
      <div className="container d-flex justify-content-center fondo-transparente">
        <div className="bg-green-apple">
          <DateFormat />
        </div>
      </div>
    </nav>

  );
}

export default NavBar;
