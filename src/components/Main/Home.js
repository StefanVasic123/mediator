import React from 'react';
import './Home.css';
import Nav from '../Nav';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
    return (
    <div>
        <div className="jumbotron jumbotron-fluid">
            <Nav />
            <div className="container">
                <h1 className="display-4">Mediator</h1>
                <p>Your choice for fast and efficient employment</p>
                <hr className="my-4 " />
                    <p>Click Apply button, fill out the form and take the first step towards a brighter future</p>
                    <p>Very soon we will send you e-mail with job position and other directions</p>
                    <p className="lead">
                        <Link to={"/userlogin"}><a className="btn btn-primary btn-lg" href="#" role="button">Appy for job!</a></Link>
                    </p>
            </div>
        </div>
    </div>
    );
};

export default Home;