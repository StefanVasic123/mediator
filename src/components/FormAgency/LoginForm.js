import React from 'react';
import './LoginFormStyle.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div className="container">
            <form>
            <h2 className="h1-responsive font-weight-bold text-center my-4">Sing in form</h2>
 
 <p className="text-center w-responsive mx-auto mb-5">Want to work with us? You need reliable workers with transparent profile? Submit on this form and iniciate cooperation with us.</p>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <p style={{paddingTop: '20px'}}>
                    <button className="btn btn-secondary" onClick={() => this.props.history.goBack()}>Back</button>
                </p>
        </div>
        );
    }
}

export default LoginForm;