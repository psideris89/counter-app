import React, { Component } from 'react';
import { throwStatement, thisExpression } from '@babel/types';

export default class Homepage extends Component {
  constructor() {
    super();

    this.state = {
      jsonReturnedValue: null
    };
    this.renderAsda = this.renderAsda.bind(this);
  }

  renderAsda() {}
  componentDidMount() {
    const icsSessionId = 'value_here';

    // http: fetch(
    //   'http:localhost:8080/sessions?scope=LEARNING'
    // ).then(response => {
    //   console.log('hi');
    //   response.json();
    // });
    // .then(json => {
    //   this.setState({ jsonReturnedValue: json });
    // });

    fetch('http://localhost:8081/message/test', {
      method: 'get',
      headers: {
        'X-BMJ-User-Session-Id': icsSessionId,
        Accept: 'application/json'
      }
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ jsonReturnedValue: json });
      });
  }

  render() {
    return (
      <div>
        {/* <h1>{this.readSessionId()}</h1> */}
        <h1>{this.state.jsonReturnedValue}</h1>
      </div>
    );
  }
}
