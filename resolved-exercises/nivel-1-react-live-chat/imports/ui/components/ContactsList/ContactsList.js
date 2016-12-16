import React, { Component } from 'react';

import './ContactsList-styles.scss';

import SearchBox from '../SearchBox/SearchBox';
import List from '../List/List';

export default class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      contacts: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const contacts = nextProps.contacts || [];

    this.setState({ contacts: nextProps }, () => {
      this.render();
    });
  }

  render() {
    return (
      <div className='ContactsList'>
        <SearchBox></SearchBox>
        <List contacts={this.props.contacts}></List>
      </div>
    );
  }
}

List.propTypes = {
  contacts: React.PropTypes.array
};

