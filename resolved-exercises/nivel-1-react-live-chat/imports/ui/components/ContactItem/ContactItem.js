import React, { Component } from 'react';

import './ContactItem-styles.scss';

export default class ContactItem extends Component {
  render() {
    return (
      <div className='ContactItem'>
        <div className='img__container'></div>
        <div className='p__container'>
          <p>{this.props.contact.name}</p>
        </div>
      </div>
    );
  }
}

ContactItem.propTypes = {
  contact: React.PropTypes.object
};
