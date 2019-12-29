import React from 'react';
import './AgencyInterface.css';

const UserDetails = (props) => {
    return (
        <div className='container'>
            <div className='about-client'>
                <div className='left-content'>
            <img alt="avatar" src={props.avatar} />
                </div>
                <div className='right-content'>
                    <div className='name'>
                        First Name: {props.name}
                    </div>
                    <div className='last-name'>
                        Last Name: {props.lastName}
                    </div>
                    <div className='country'>
                        Country: {props.country}
                    </div>
                </div>
            </div>
                <div className='specifications'>
                        Specifications: {props.specifications}
                </div>
             
        </div>
    );
};

export default UserDetails;