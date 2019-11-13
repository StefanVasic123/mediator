import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Mediator</h1>
                <p className="lead">Your choice for quick and efficient employment</p>
                <hr className="my-4" />
                <p>Click Apply button, fill out the form and take the first step towards a brighter future</p>
                <p className="lead">
                    <Link to={"/userlogin"}><a className="btn btn-primary btn-lg" href="#" role="button">Appy for job!</a></Link>
                </p>
        </div>
    );
};

export default Home;