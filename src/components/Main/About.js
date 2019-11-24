import React from 'react';

const About = (props) => {
    return (
        <div>
                <h1 className="h1-responsive font-weight-bold text-center my-4">About us</h1>
                <p>
                    <button className="btn btn-secondary" onClick={() => props.history.goBack()}>Back</button>
                </p>
        </div>
    )
};

export default About;