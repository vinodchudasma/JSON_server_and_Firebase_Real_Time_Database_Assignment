import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <div className="header">
            <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/location">Location</a></li>
                <li><a href="/service">Service</a></li>
            </ul>
        </div>
    );
}

export default Header;
