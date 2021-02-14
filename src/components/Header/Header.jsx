import React from 'react';

export class Header extends React.Component {
    constructor(props) {
        debugger;
        super(props);
        this.state = { headerData: props.headerData };
    }

    render() {
        return (<div>{this.state.headerData}</div>);
    }
}