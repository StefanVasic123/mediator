import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const SignUp = (props) => {
    return (
        <div className='container'>
            <h2 className="h1-responsive font-weight-bold text-center my-4">Sing in form</h2>
            <p className="text-center w-responsive mx-auto mb-5">Want to work with us? You need reliable workers with transparent profile? Submit on this form and iniciate cooperation with us.</p>
            <div className="card">
            <article className="card-body">
            <form className="form-horizontal" action='' method="POST">
                <fieldset>
                    <div id="legend">
                    <legend className="">Register</legend>
                    </div>
                    <div className="control-group">
                    <label className="control-label" for="username">Username</label>
                    <div className="controls">
                        <input type="text" id="username" nameFor="username" placeholder="" className="form-control" />
                        <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                    </div>
                    </div>
                
                    <div className="control-group">
                    <label className="control-label" for="email">E-mail</label>
                    <div className="controls">
                        <input type="text" id="email" nameFor="email" placeholder="" className="form-control" />
                        <p className="help-block">Please provide your E-mail</p>
                    </div>
                    </div>
                
                    <div className="control-group">
                    <label className="control-label" for="password">Password</label>
                    <div className="controls">
                        <input type="password" id="password" nameFor="password" placeholder="" className="form-control" />
                        <p className="help-block">Password should be at least 4 characters</p>
                    </div>
                    </div>
                
                    <div className="control-group">
                    <label className="control-label"  for="password_confirm">Password (Confirm)</label>
                    <div className="controls">
                        <input type="password" id="password_confirm" nameFor="password_confirm" placeholder="" className="form-control" />
                        <p className="help-block">Please confirm password</p>
                    </div>
                    </div>
                
                    <div className="control-group">
                    <div className="controls">
                        <button className="btn btn-success">Register</button>
                    </div>
                    </div>
                </fieldset>
            </form>
            </article>
        </div>
        <p style={{paddingTop: '20px'}}>
            <button className='btn btn-secondary' onClick={() => props.history.goBack()}>back</button>
        </p>
        </div>
    );
};

export default SignUp;