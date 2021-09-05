import React from "react";
import { Link } from "react-router-dom";

function AdminBar({ logoutUser }) {
  return (
    <nav className="adminNav">
      <Link to="/admin/">Project Lists</Link>
      <Link to="/admin/logos">Logo Lists</Link>
      <Link to="/admin/graphics">Graphic Design Lists</Link>
      <Link to="/admin/project">Add Project</Link>
      <Link to="/admin/add-logo">Add Logo</Link>
      <Link to="/admin/add-graphic">Add Graphic Design</Link>
      <button onClick={logoutUser}>Logout</button>
    </nav>
  );
}

export default AdminBar;
