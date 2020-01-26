import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import UserCard from './UserCard';
import UserDetails from './UserDetails';

import './AgencyInterface.css';

const AgencyInterface = (props) => {
    return (
        <div className='container'>
            <h4 style={{ paddingTop: '30px' }} className="text-center w-responsive mx-auto mb-5">Hire your worker without making single phone call.</h4><br />
            <p style={{ marginTop: '-65px' }} className="text-center w-responsive mx-auto mb-5">Just send request and track your client in real-time.</p>
            <UserCard />
            <UserCard />
            <UserCard />
            <button className='btn btn-secondary' style={{ marginTop: '20px', marginLeft: '15px' }}onClick={() => props.history.goBack()}>back</button>
        </div>
    );
};

export default AgencyInterface;
