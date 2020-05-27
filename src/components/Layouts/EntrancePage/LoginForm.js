import React, {Component} from "react";
import axios from "axios";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        const {
            email,
            password
        } = this.state;

        // FAKE API response
        let logged_in_tmp = false;
        if (email === "sophiya2petryshyn@gmail.com" && password==="s")
            logged_in_tmp = true;

        axios.post(
            "/sessions",
            {
                "logged_in": logged_in_tmp,
                "user": {
                    "email": email,
                    "password": password
                }
            },
            { withCredentials: true }
        ).then(response => {
            // TODO: real API would tell me loggedIn: true, I have to check with it out
            // console.log('gg', response)
            if (response.data.logged_in) {
                this.props.handleSuccessfulAuth(response.data);
            }
        }).catch(error => {
            console.log('login error: ', error)
        });
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

                    <button type={'submit'}>Log In</button>
                </form>
            </div>
        );
    }
}