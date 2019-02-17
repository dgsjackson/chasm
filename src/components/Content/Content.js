import React from 'react';
import './Content.css';
import CoinSelector from '../CoinSelector/CoinSelector';

export default class Content extends React.Component {
  render() {
    return (
      <div id="content-container">
        <CoinSelector/>
        <div id="cards-container" className="col-sm-12 col-md-9 col-6">
          <div className="card coin-card">
            <h4 className="coin-symbol">XRP</h4>
            <div>0.33</div>
          </div>
        </div>
      </div>
    );
  }
}