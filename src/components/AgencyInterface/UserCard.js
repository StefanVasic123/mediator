import React from 'react';
import UserDetails from './UserDetails';
import faker from 'faker';
import './AgencyInterface.css';

const UserCard = () => {
    const jobs = faker.name.jobTitle();
    return (
        <div className='container'>
            <div className='content'>
                <UserDetails 
                name={faker.name.firstName()}
                lastName={faker.name.lastName()}
                country={faker.address.country()}
                specifications={`${jobs}, ${jobs}, ${jobs}`}
                avatar={faker.image.avatar()}
                />
                <div className='buttons'>
                    <button className='btn btn-primary'>send request</button>
                    <button className='btn btn-info'>more info</button>
                </div>
            </div><hr />
        </div>
    );
};

export default UserCard;