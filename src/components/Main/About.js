import React from 'react';

const About = (props) => {
    return (
        <div>
                <h1>About us</h1>
                <p>
                    <button onClick={() => props.history.goBack()}>Back</button>
                </p>
        </div>
    )
};

export default About;