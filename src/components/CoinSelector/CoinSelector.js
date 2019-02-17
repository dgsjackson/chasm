import React from 'react';

export default class CoinSelector extends React.Component {
  //fetch coins list here
  //on each change event for the input, filter the coins and setState

  //render should render the list of coins
  render() {
    return (
      <div id="selector-container">
        <div className="col-sm-12 col-md-6 col-lg-4 col-3">
          <input className="form-input" id="coin-selector" type="text"></input>
        </div>
        <ul className="menu col-sm-12 col-md-6 col-lg-4 col-3">
          <li className="menu-item">
            XRP
          </li>
          <li className="divider"></li>
          <li className="menu-item">
            BTC
          </li>
        </ul>
      </div>
    );
  }
}