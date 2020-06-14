import React from 'react';
import { A } from "hookrouter";

export const Navbar = () => {
    return (
        <div className="Navbar-wrapper">
            <div className="Left-side">

                <div className="Navbar-links-wrapper">

                    <div className="Navbar-links">
                        <A href="/">Home</A>
                    </div>

                    <div className="Navbar-links">
                        <A href="/about">About</A>
                    </div>

                    <div className="Navbar-links">
                        <A href="/portfolio">Porfolio</A>
                    </div>

                    <div className="Navbar-links">
                        <A href="/contact">Contact</A>
                    </div>

                    <div className="Right-side">
                        LOGGED IN
                    <A href="/">Log Out</A>
                    </div>

                </div>
            </div>
        </div>
    )
}
