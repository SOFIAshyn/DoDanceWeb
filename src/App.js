import React, { Component } from 'react';
import './App.css';
import { Header, Footer, ProfilePage, HomePage } from './Components/Layouts';
import { BrowserRouter } from 'react-router-dom';


export default class extends Component {
    state = {
        userAccounts: [],
    };

    render() {
      return (
      <BrowserRouter>
      <div>
        <Header/>
        <ProfilePage/>
        <Footer/>
      </div>
      </BrowserRouter>
      );
    }
}
