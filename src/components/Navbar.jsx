import React from 'react';

import { A } from "hookrouter";

export const Navbar = () => {
    return (
        <div className="Navbar">

            <div className="Navbar_Background">

            </div>

            <div className="Navbar-links-wrapper" >

                <div className="Navbar-links">
                    <A href="/">Home</A>
                    <A href="/contact">Contact</A>

                    <div className="Right-side">
                        LOGGED IN
                        <A href="/">Log Out</A>
                    </div>
                </div>

            </div>

        </div>
    )
}
