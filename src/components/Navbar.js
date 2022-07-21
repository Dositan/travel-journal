import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li className="logo">
          <img src="/images/logo.png" alt="logo" />
          my travel journal.
        </li>
        <div className="links">
          <li>
            <a href="https://dositan-homepage.vercel.app/">Portfolio</a>
          </li>
          <li>
            <a href="https://instagram.com/dastanozgeldi/">Instagram</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
