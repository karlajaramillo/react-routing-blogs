import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark blog-nav">
            <Link className="navbar-brand text-white" to="/">Home</Link>
            <Link className="navbar-brand text-white" to="/blogs">Blogs</Link>
            <Link className="navbar-brand text-white" to="/authors">Authors</Link>
        </nav>
    )
}

export default Navbar;