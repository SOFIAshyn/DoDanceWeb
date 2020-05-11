import React from "react";

export default class ProfileData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            userName: 'SOFIIA PETRYSHYN'
        }
    }

    render() {
        return (
            <div>
                <span className={'profileDataBold'}>{this.state.userName}</span>
            </div>
        )
    }
};
