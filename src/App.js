import React, { Component } from 'react';
import './App.css';
import { Header, Footer, ProfilePage } from './Components/Layouts';


export default class extends Component {
  render() {
      return <div>
        <Header/>
        <ProfilePage/>
        <Footer/>
      </div>
  }
}
