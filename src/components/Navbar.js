import React from "react";

import { Link } from "react-router-dom";



export default function Navbar() {

    return (

        <nav className="navbar navbar-dark bg-dark ">

            <div className="container-fluid">

                <a className="navbar-brand  mx-auto font-weight-bold" href="/" >GoAML</a>

                <form className="navbar-form navbar-left" action="/">

                    <Link to="/"  className="btn btn-outline-secondary ">

                        <i className="fas fa-sign-out-alt" >  LogOut  </i>

                    </Link >

                </form>





            </div>

        </nav>

    );

}