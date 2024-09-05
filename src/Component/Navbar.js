//import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import newsMonkeyLogo from './newsMonkeyLogo.png';

const Navbar = () => {
  return (
    <div style={{ position: 'sticky', top: '0%', zIndex: '2' }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* <Link className="navbar-brand" to="/">NewsMonkey</Link> */}
          <h2 className="text-danger d-flex align-items-center" style={{ fontWeight: 'bold', fontSize: ' 4 rem', textShadow: '2px 1px 2px #879', margin: '0' }}>
            <img
              className="mx-2 rounded-pill shadow"
              src={newsMonkeyLogo}
              alt="NewsMonkey Logo"
              style={{
                height: '45px',
                border: '2px solid #fff',
                padding: '2px',
              }}
            />
            NewsMonkey
          </h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
    <li className="nav-item">
      <Link
        className="nav-link border mx-2"
        style={{
          borderRadius: "5px",
          padding: "5px 12px",
          backgroundColor: "#007bff", // Primary blue color
          color: "#ffffff", // White text color
          transition: "background-color 0.3s", // Smooth color transition
        }}
        aria-current="page"
        to="/"
      >
        Home
      </Link>
    </li>
    {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> */}
    <li className="nav-item">
      <Link
        className="nav-link border mx-1"
        style={{
          borderRadius: "5px",
          padding: "5px 12px",
          backgroundColor: "#007bff",
          color: "#ffffff",
          transition: "background-color 0.3s",
        }}
        to="/sports"
      >
        Sports
      </Link>
    </li>
    <li className="nav-item">
      <Link
        className="nav-link border mx-1"
        style={{
          borderRadius: "5px",
          padding: "5px 12px",
          backgroundColor: "#007bff",
          color: "#ffffff",
          transition: "background-color 0.3s",
        }}
        to="/politics"
      >
        Politics
      </Link>
    </li>
    <li className="nav-item">
      <Link
        className="nav-link border mx-1"
        style={{
          borderRadius: "5px",
          padding: "5px 12px",
          backgroundColor: "#007bff",
          color: "#ffffff",
          transition: "background-color 0.3s",
        }}
        to="/movies"
      >
        Movies
      </Link>
    </li>
    <li className="nav-item">
      <Link
        className="nav-link border mx-1"
        style={{
          borderRadius: "5px",
          padding: "5px 12px",
          backgroundColor: "#007bff",
          color: "#ffffff",
          transition: "background-color 0.3s",
        }}
        to="/science"
      >
        Science
      </Link>
    </li>
    <li className="nav-item">
      <Link
        className="nav-link border mx-1"
        style={{
          borderRadius: "5px",
          padding: "5px 12px",
          backgroundColor: "#007bff",
          color: "#ffffff",
          transition: "background-color 0.3s",
        }}
        to="/business"
      >
        Business
      </Link>
    </li>
    <li className="nav-item">
      <Link
        className="nav-link border mx-1"
        style={{
          borderRadius: "5px",
          padding: "5px 12px",
          backgroundColor: "#007bff",
          color: "#ffffff",
          transition: "background-color 0.3s",
        }}
        to="/music"
      >
        Music
      </Link>
    </li>
    <li className="nav-item">
      <Link
        className="nav-link border mx-1"
        style={{
          borderRadius: "5px",
          padding: "5px 12px",
          backgroundColor: "#007bff",
          color: "#ffffff",
          transition: "background-color 0.3s",
        }}
        to="/health"
      >
        Health
      </Link>
    </li>
  </ul>
</div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar