import React, { Component } from 'react';

import './List-styles.scss';
import ContactItem from '../ContactItem/ContactItem';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  renderContacts() {
    let contacts = this.props.contacts || [];

    return contacts.map((contact) => (
      <ContactItem key={contact._id} contact={contact}/>
    ));
  }

  render() {
    const contactsData = this.props.contacts;
    return (
      <div className='List'>
        { contactsData.length ? (
          <div>
            {this.renderContacts()}
          </div>
         ) : (
          <div className="List__spinner">
            <span></span>
          </div>
        )}
      </div>
    );
  }
}

List.propTypes = {
  contacts: React.PropTypes.array
};
