import React from 'react';

export class Body extends React.Component {
    constructor(props) {
        super(props);
        console.log('Body constructor');
        this.state = { bodyData: props.bodyData };
    }

    buttonClick = () => {
        this.setState({ bodyData: [...this.state.bodyData, 'changed'] });
    }

    componentWillMount() {
        console.log('Body componentWillMount');
    }

    componentDidMount() {
        console.log('Body componentDidMount');
    }

    componentWillReceiveProps(props) {
        console.log('Body componentWillReceiveProps');
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('Body shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(newProps, newState) {
        console.log('Body componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('Body componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Body componentWillUnmount');
    }

    render() {
        return (
            <React.Fragment>
                <div>{this.state.bodyData}</div>
                <input type="button" onClick={this.buttonClick} value="Click Me" />
            </React.Fragment>);
    }

}