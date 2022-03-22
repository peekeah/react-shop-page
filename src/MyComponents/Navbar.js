import * as React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from '@mui/icons-material/Star';

export default function Navbar() {

    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand d-flex" href="/">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav d-flex">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        All Products
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
                <div className="d-flex">
                  <button className="btn btn-outline-dark">{<ShoppingCartIcon />} Cart 
                    <span className="bg-dark text-light"> 0</span>
                  </button>
                </div>
              </ul>
            </div>          
          </div>
        </nav>
    </>
    );
}
