import React from 'react';

const About = (props) => {
    return (
        <div className='container'>
                <h1 className="h1-responsive font-weight-bold text-center my-4">About us</h1>
                <p style={{paddingTop: '20px'}}>
                    <button className="btn btn-secondary" onClick={() => props.history.goBack()}>Back</button>
                </p>
        </div>
    )
};

export default About;