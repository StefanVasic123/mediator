import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './LoginFormStyle.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="container">
             <h2 className="h1-responsive font-weight-bold text-center my-4">Log in</h2>
            <p className="text-center w-responsive mx-auto mb-5">Login with your private acount.</p>
                <div className="card">
            <article className="card-body">
            <Link to='/signup'><a href="" className="float-right btn btn-outline-primary">Sign up</a></Link>
            <h4 className="card-title mb-4 mt-1">Sign in</h4>
                <form>
                    <div className="form-group">
                        <label>Your email</label>
                        <input name="" className="form-control" placeholder="Email" type="email" />
                    </div> 
                    <div className="form-group">
                        <a className="float-right" href="#">Forgot?</a>
                        <label>Your password</label>
                        <input className="form-control" placeholder="******" type="password" />
                    </div> 
                    <div className="form-group"> 
                    <div className="checkbox">
                    <label> <input type="checkbox" /> Save password </label>
                    </div> 
                    </div>  
                    <div className="form-group">
                        <Link to='/agencyinterface'><button type="submit" className="btn btn-primary px-xl-5"> Login  </button></Link>
                    </div>                                                            
                </form>
            </article>
            </div>
                <div style={{paddingTop: '20px'}}>
                    <button className="btn btn-secondary" onClick={() => this.props.history.goBack()}>Back</button>
                </div>
                </div>
        );
    }
}

export default LoginForm;