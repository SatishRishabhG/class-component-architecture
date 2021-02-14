import React from 'react';

export class Footer extends React.Component {
    constructor(props) {
        debugger;
        super(props);
        this.state = { footerData: props.footerData };
    }

    render() {
        return (<div>{this.state.footerData}</div>);
    }
}