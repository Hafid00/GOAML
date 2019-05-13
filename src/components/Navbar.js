import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          GoAML
        </a>
        <form className="navbar-form navbar-left" action="/">
        <Link to="/" className="btn btn-danger">
        <i class="fas fa-sign-out-alt">LogOut</i>
        </Link>   
    </form>
       
      
      </div>
    </nav>
  );
}