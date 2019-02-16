import React from 'react';
import './Content.css';

export default class Content extends React.Component {
  render() {
    return (
      <div id="content-container">
        <div id="selector-container">
          <div className="col-sm-12 col-md-6 col-lg-4 col-3">
            <input className="form-input" id="coin-selector" type="text"></input>
          </div>
          <ul className="menu col-sm-12 col-md-6 col-lg-4 col-3">
            <li class="menu-item">
              XRP
            </li>
            <li class="divider"></li>
            <li class="menu-item">
              BTC
            </li>
          </ul>
        </div>
        <div id="cards-container" className="col-sm-12 col-md-9 col-6">
          <div class="card">
            <h4 class="card-symbol">XRP</h4>
            <div>0.33</div>
          </div>
        </div>
      </div>
    );
  }
}