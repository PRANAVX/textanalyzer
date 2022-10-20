import React from "react";
import PropTypes from "prop-types";
import {  Link } from "react-router-dom";



export default function Navbar(props) {

    // const darkMode =()=>{
    //     console.log("fdsad")
    // }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div  className="container-fluid ">
          <Link className="navbar-brand text-light" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div   className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link text-light" to="/about">
                  About
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="darkmode"
                onChange={props.darkMode}
              />
              <label className="form-check-label text-light" htmlFor="darkmode">
                Darkmode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = { title: PropTypes.string };
