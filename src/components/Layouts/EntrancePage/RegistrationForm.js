import React, {Component} from "react";
import axios from "axios";

export default class RegistrationForm extends Component {
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
        const {
            email,
            password,
            confirmationPassword
        } = this.state;

        axios.post(
            "/registrations",
            {
                "user": {
                    "email": email,
                    "password": password,
                    "confirmationPassword": confirmationPassword
                }
            },
            { withCredentials: true }
        ).then(response => {
            if (response.status === 201) {
                console.log(response);
                this.props.handleSuccessfulAuth(response.data);
            }
        }).catch(error => {
            console.log('registration error:  ', error)
        });

        event.preventDefault();
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