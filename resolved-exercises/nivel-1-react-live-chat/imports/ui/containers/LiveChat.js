import React, { Component } from 'react';
import times from "lodash/times";

import ContactsList from '../components/ContactsList/ContactsList';

export default class LiveChat extends Component {
  constructor(props) {
    super(props);
    this.times = times;

    this.state = {
      contacts: []
    };
  }

  componentWillMount() {
    setTimeout(() => {
      const contacts = this._getDada();
      
      this.setState({ contacts }, () => {
        this.render();
      });
      
    }, 3000);
  }

  _getDada() {
    let mockData = [];
    mockData = this.times( 10, index => ( { _id: index, name: 'John Smith' } ));

    return mockData;
  }

  render() {
    return (
      <div>
        <ContactsList contacts={this.state.contacts}/>
      </div>
    );
  }
}
