import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="container">
      <div className="navbar-brand">
        GitHub Accounts Search App
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/"
            exact
            className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className="nav-link">
            Info
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar
