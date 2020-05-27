import React, { Component } from 'react';
import './App.css';
import { Header, Footer, ProfilePage, HomePage, ExplorePage, NotificationPage, UploadPage } from './components/Layouts';
import axios from 'axios';
import { EntrancePage } from './components/Layouts/EntrancePage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default class extends Component {
    constructor() {
        super();
        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
            userNews: {},
            userNotifications: {},
        };
        this.handleLogin = this.handleLogin.bind(this);
        // this.setUserNews = this.setUserNews.bind(this);
    }

    componentDidMount() {
        this.checkLoginStatus();
    }

    checkLoginStatus() {
        axios
            .get("/profile", {withCredentials: true}).then(
            response => {
                // console.log("logged_in ?", response);
                // console.log("logged_in 2?", response.data.logged_in)
                if (response.data.logged_in && this.state.loggedInStatus === 'NOT_LOGGED_IN') {
                    this.setState({
                        loggedInStatus: "LOGGED_IN",
                        user: response.data
                    });
                    // axios.get("/profileNewsFeed", {withCredentials: true}).then( resp => {
                    //     this.setState({ userNews: resp.data });
                    // });
                    // axios.get("/profileNotifications", {withCredentials: true}).then( resp => {
                    //     this.setState({ userNotifications: resp.data });
                    // });
                    console.log("dfghjkl;", this.state)
                } else if (!response.data.logged_in && this.state.loggedInStatus === 'LOGGED_IN') {
                    this.setState({
                        loggedInStatus: "NOT_LOGGED_IN",
                        user: {}
                    })
                }
            }).catch(error => {
                console.log("check error:", error)
        });
    }

    handleLogin(data) {
        this.setState ({
            loggedInStatus: "LOGGED_IN",
            user: data.user
        })
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
            {/*<Route path={'/login'} component={LoginPage} />*/}
            <Route
                exact
                path={'/'}
                render={props => (
                    <EntrancePage {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
                )}
            />
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
      );
    }
}
