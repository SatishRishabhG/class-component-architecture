import React from 'react';
import { Header, Body , Footer } from './components';

export class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = { headerData: 'Class Component Architecture', bodyData: 'Welcome Guys', footerData: 'classComponent@rishabh.com' };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(props) {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('shouldComponentUpdate');
  }

  componentWillUpdate(newProps, newState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <React.Fragment>
        <Header headerData={this.state.headerData}></Header>
        <Body bodyData={this.state.bodyData}></Body>
        <Footer footerData={this.state.footerData}></Footer>
      </React.Fragment>
    );
  }
}


