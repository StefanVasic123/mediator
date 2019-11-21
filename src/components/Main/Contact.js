import React from 'react';

const Contact = (props) => {
    return (
        <div>
            <h1>Contact</h1>
            <p>
                <button onClick={() => props.history.goBack()}>Back</button>
            </p>
        </div>
    );
};

export default Contact;