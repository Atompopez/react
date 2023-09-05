import React from "react";

const Nav = () => {
    return (
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style={{color:'white'}}>Navbar</a>
                <div id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" style={{color:'white'}}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style={{color:'white'}}>Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style={{color:'white'}}>Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true" style={{color:'white'}}>Disabled</a>
                        </li>
                    </ul>
                </div>
            </div>
        1</nav>
    );
};

export default Nav;