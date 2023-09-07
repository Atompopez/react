import React from "react";

const Nav = () => {
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid" style={{maxWidth:'1300px'}}>
                <a className="navbar-brand" href="#" style={{color:'white'}}>Start Boostrap</a>
                <div id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#" style={{color:'white'}}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:'white'}}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" style={{color:'white'}}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" aria-disabled="true" style={{color:'white'}}>contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;