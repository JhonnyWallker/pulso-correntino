import DateFormat from "./DateFormat";

function NavBar() {
  return (
    <>
      <nav className="navbar bg-green-apple">
        <div className="container bg-green-apple d-flex justify-content-center">
          <div className="bg-green-apple m-0">
            <div className="bg-green-apple">
              <DateFormat />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
