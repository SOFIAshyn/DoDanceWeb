import React, { Component } from 'react';
import './App.css';
import { Header, Footer, ProfilePage, HomePage, ExplorePage, NotificationPage, UploadPage } from './Components/Layouts';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default class extends Component {
    state = {
        userAccounts: [],
    };

    render() {
      return (
      <BrowserRouter>
      <div>
        <Header/>
        <Switch>
            <Route path={'/profile'} component={ProfilePage} />
            <Route path={'/explore'} component={ExplorePage} />
            <Route path={'/upload'} component={UploadPage} />
            <Route path={'/notifications'} component={NotificationPage} />
            <Route path={'/'} component={HomePage} />
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
      );
    }
}
