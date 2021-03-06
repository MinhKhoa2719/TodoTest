import React from 'react';

import axios from 'axios';

import ip from './config/config'

import logo from './images/i.jpg'

export default class PersonList extends React.Component {
  state = {
    test: []
  }

  componentDidMount() {
    let ipServer = ip[0].api;
    let ipConnect = 'http://' + ipServer + ':8080/api/test';
    axios.get(ipConnect)
      .then(res => {
        const test = res.data;
        this.setState({ test });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ul>
        <img src={logo} alt="Logo" />
        khoa minh test test test test test lan 5
        { this.state.test.map(test => <li>{test}</li>)}
      </ul>
    )
  }
}