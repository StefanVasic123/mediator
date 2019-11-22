import React from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link,
        withRouter
        } from 'react-router-dom';
import LoginForm from './components/FormAgency/LoginForm';
import UserForm from './components/FormUser/UserForm';
import About from './components/Main/About';
import Contact from './components/Main/Contact';
import Home from './components/Main/Home';
import './App.css';
import pageNotFound404 from './components/Main/pageNotFound404';
import createHistory from 'history/createBrowserHistory';
import Nav from './components/Nav';
const history = createHistory();




class App extends React.Component {
    render () {
        return (
        <Router history={history} basename={process.env.PUBLIC_URL}>
            <div>
                <Switch>
                    <Route path='/' exact component={withRouter(Home)} />
                    <Route path='/about' component={withRouter(About)} />
                    <Route path='/contact' component={withRouter(Contact)} />
                    <Route path='/agencylogin' component={withRouter(LoginForm)} /> 
                    <Route path='/userlogin' component={withRouter(UserForm)} />
                    <Route path='' component={pageNotFound404} />
                </Switch>
            </div>
        </Router>
        );
    }
}


export default App;
