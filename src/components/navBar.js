import React from "react";
import { Link } from "react-router-dom";

function AdminBar({ logoutUser }) {
  return (
    <nav className="navbar">
      <Link to="/websites">Websites</Link>
      <Link to="/add-website">Add Website</Link>
      <Link to="/apps">Apps</Link>
      <Link to="/add-app">Add App</Link>
      <Link to="/logos">Logos</Link>
      <Link to="/add-logo">Add Logo</Link>
      <Link to="/graphics">Graphics</Link>
      <Link to="/add-graphic">Add Graphic</Link>
      <button onClick={logoutUser}>Logout</button>
    </nav>
  );
}

export default AdminBar;
