import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <img className="nav--logo" src="/images/logo.png" alt="logo" />
      <h3 className="nav--title">my travel journal.</h3>
    </nav>
  );
}

export default Navbar;
