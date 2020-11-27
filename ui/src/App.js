import React from 'react';

import axios from 'axios';

import ip from './config/config'

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
        khoa minh test test
        { this.state.test.map(test => <li>{test}</li>)}
      </ul>
    )
  }
}