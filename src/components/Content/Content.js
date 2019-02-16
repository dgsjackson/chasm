import React from 'react';
import './Content.css';

export default class Content extends React.Component {
  render() {
    return (
      <div id="content-container">
        <div className="col-sm-12 col-md-6 col-lg-4 col-3">
          <input className="form-input" id="coin-selector" type="text"></input>
        </div>
      </div>
    );
  }
}