import React, { Component } from 'react';
import './App.css';
import { Header, Footer, ProfilePage, HomePage, ExplorePage, NotificationPage, UploadPage } from './components/Layouts';
// import { LoginPage } from './components/Layouts/LoginPage';
import { RegistrationPage } from './components/Layouts/RegistrationPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default class extends Component {
    constructor() {
        super();
        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        };
    }

    render() {
      return (
      <BrowserRouter>
      <div>
        <Header/>
        <Switch>
            <Route
                exact
                path={'/profile'}
                render={props => (
                    <ProfilePage {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
            />
            <Route
                exact
                path={'/explore'}
                render={props => (
                    <ExplorePage {...props} loggedInStatus={this.state.loggedInStatus} />
                )}
            />
            <Route path={'/upload'} component={UploadPage} />
            <Route path={'/notifications'} component={NotificationPage} />
            <Route path={'/home'} component={HomePage} />
            <Route path={'/'} component={RegistrationPage} />
            {/*<Route path={'/'} component={LoginPage} />*/}
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
      );
    }
}
