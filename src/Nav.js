import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import Home from './components/Main/Home';
import About from './components/Main/About';
import Contact from './components/Main/Contact';

class Nav extends Component {
    render() {
        return (
            <nav>
                <ul className="nav justify-content-center">
                    <Link to='/'>
                        <li className="nav-item">
                            <a className="nav-link">Home</a>
                        </li>
                    </Link>
                    <Link to='/about'>
                        <li className="nav-item">
                        <a className="nav-link">About us</a>
                        </li>
                    </Link>
                    <Link to='/agencylogin'>
                        <li className="nav-item">
                        <a className="nav-link">For Agencies</a>
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li className="nav-item">
                        <a className="nav-link">Contact</a>
                        </li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default Nav;
/*
<ul className="nav justify-content-center">
                        <li className="nav-item">
                        <a className="nav-link">Home</a>
                        </li>
                    <Link to='/about'>
                        <li className="nav-item">
                        <a className="nav-link">About us</a>
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li className="nav-item">
                        <a className="nav-link">Contact</a>
                        </li>
                    </Link>
                </ul>
*/
 
