import React from 'react';

const pageNotFound404 = (props) => {
    return (
        <div>
            <h2>"Page Not Found 404"</h2>
            <p>If this error show up go back or click Home on navigation bar on top, it's server side problem</p>
            <p>We will fix this problem soon</p>
            <p>
                <button onClick={() => props.history.goBack()}>Back</button>
            </p>
        </div>
    );
};

export default pageNotFound404;