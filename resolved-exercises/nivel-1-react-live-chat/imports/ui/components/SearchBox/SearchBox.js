import React, { Component } from 'react';

import './SearchBox-styles.scss';

export default class SearchBox extends Component {
  render() {
    return (
      <div className='SearchBox'>
        <div className="input__container">
          <input/>
        </div>

        <div className="button__container">
          <button>Search</button>
        </div>
      </div>
    );
  }
}
