import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>

        <hr />
        </>
    );
};

export default NavBar;
