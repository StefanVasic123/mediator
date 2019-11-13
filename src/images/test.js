        <Router>
            <section className='bgimage'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h5>Mediator</h5>
                            <p>Take advantage on your life</p>
                            <Link to='/users'><a href="#" className="btn btn-primary btn-large">Quick appling for job</a></Link>
                            <Link to='/agencies'><a href="#" className="btn btn-secondary btn-large">Agency</a></Link>
                        </div>
                    </div>
                </div>
                
                <Switch>
                    <Route path='/users'>
                        <UserForm />
                    </Route>
                    <Route path='/agencies'>
                        <LoginForm />
                    </Route>
                </Switch>
            </section>
        </Router>