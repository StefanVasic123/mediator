import React, { Component } from 'react';
import FormUserDropdown from './FormUserDropdown';
// import style.css;

class UserForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='container'>
                <form className="container">
                <h2 className="h1-responsive font-weight-bold text-center my-4">Enter personal information</h2>
                <div className="form-group row">
                        <label htmlFor="inputUserName" className="col-sm-2 col-form-label">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputUserName" placeholder="Enter Your Name" />
                    </div>
                        <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Last Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputLastName" placeholder="Enter Your Last Name" />
                    </div>
                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail" placeholder="Enter Your email" />
                        </div>
                </div>
                <div className="input-group py-3">
                    <select className="custom-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                        <option defaultValue>Enter your country</option>
                        <option value="1">Serbia</option>
                        <option value="2">Bosnia and Herzegovina</option>
                        <option value="3">Macedonia</option>
                    </select>
                    <div className="ui form">
                        <div className="field six wide column">
                            <textarea placeholder="Other info - optional" rows="4"></textarea>
                        </div>
                    </div>
                </div>
                <div className='user-dropdown'>
                    <FormUserDropdown />
                </div>
                <div className="user-apply-btn" style={{paddingTop: "100px", alignContent: "right"}}>
                    <button className="btn btn-primary" type="submit">Apply for job!</button>
                </div>
                </form>
                <p style={{paddingTop: '20px', marginLeft: '15px'}}>
                    <button className="btn btn-secondary" onClick={() => this.props.history.goBack()}>Back</button>
                </p>
            </div>
        );
    }
}

export default UserForm;