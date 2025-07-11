import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "../FavoriteContext"; 

const Navbar = ({ setCategory }) => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => setCategory("technology")}
        >
          <span id="sbBadge" className="badge bg-light text-dark fs-4">
            SB News
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setCategory("technology")}>Technology</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setCategory("business")}>Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setCategory("health")}>Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setCategory("sports")}>Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setCategory("entertainment")}>Entertainment</Link>
            </li>
          </ul>
          <Link className="btn btn-outline-light position-relative" to="/favorites">
            ❤️ Favorites
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {favorites.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
