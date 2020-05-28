import React, { Component } from "react";
import {RegistrationForm, LoginForm} from "./index";

export default class EntrancePage extends Component {
    constructor(props) {
        super(props);
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        // TODO: update parent component, redirect user
        this.props.handleLogin(data);
        this.props.history.push('/home')
    }

    render() {
        return (
            <>
                <h2>Registration: {this.props.loggedInStatus}</h2>
                <RegistrationForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
                <LoginForm handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </>
        );
    }
}