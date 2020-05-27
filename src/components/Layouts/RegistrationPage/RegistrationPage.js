import React, { Component } from "react";

export default class RegistrationPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmationPassword: "",
            registrationErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        console.log('SUBMITTED ', event);
        event.preventDefault();

        const {
            email,
            password,
            confirmationPassword
        } = this.state;

        fetch('/registrations', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "user": {
                    "email": email,
                    "password": password,
                    "confirmationPassword": confirmationPassword
                }
            })
        }).then(response => {
            console.log('registration response: ', response)
        }).catch(error => {
            console.log('registration error:  ', error)
        })
        ;
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type={'email'}
                        name={'email'}
                        placeholder={'Email'}
                        value={this.state.email}
                        onChange={this.handleChange}
                        required />

                    <input
                        type={'password'}
                        name={'password'}
                        placeholder={'Password'}
                        value={this.state.password}
                        onChange={this.handleChange}
                        required />

                    <input
                        type={'password'}
                        name={'confirmationPassword'}
                        placeholder={'Password Confirmation'}
                        value={this.state.confirmationPassword}
                        onChange={this.handleChange}
                        required />

                    <button type={'submit'}>Register</button>
                </form>
            </div>
        );
    }
}