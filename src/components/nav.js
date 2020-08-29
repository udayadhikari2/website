import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="Apps">
            <header className="App-header">
                <div className="navBar">
                    <div className="logo">
                        logo
                </div>
                    <div className="navList">
                        <Link to=''>
                            <li>Home</li>
                        </Link>
                        <Link to='/components/About'>
                            <li>About Us</li>
                        </Link>
                        <Link to='/components/contact'>
                            <li>Contact Us</li>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Nav;
