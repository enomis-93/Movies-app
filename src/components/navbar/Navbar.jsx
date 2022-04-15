import React, { useEffect } from "react";

function Navbar({ setActiveCategory, activeCategory, setFiltered, popular }) {
  useEffect(() => {
    if (activeCategory === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeCategory)
    );
    setFiltered(filtered);
  }, [activeCategory]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Movie App
        </a>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={
                  activeCategory === 0 ? "btn active nav-link" : "btn nav-link"
                }
                aria-current="page"
                onClick={() => setActiveCategory(0)}
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  activeCategory === 35 ? "btn active nav-link" : "btn nav-link"
                }
                onClick={() => setActiveCategory(35)}
              >
                Comedy
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  activeCategory === 28 ? "btn active nav-link" : "btn nav-link"
                }
                onClick={() => setActiveCategory(28)}
              >
                Action
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
