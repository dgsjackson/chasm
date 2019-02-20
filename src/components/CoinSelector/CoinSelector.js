import React from 'react';
import BinanceProvider from '../../providers/BinanceProvider';
import './CoinSelector.css';

export default class CoinSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = { assets: [] };
    BinanceProvider.fetchPricesInBTC().then(assets => {
      this.setState({ assets });
    }).catch(() => alert('Failed to load symbols from Binance.'));
  }

  render() {

    let assetListItems = [];

    _.each(this.state.assets, (asset, index) => {
      assetListItems.push(<li className="menu-item">{asset.symbol}</li>);
      if (index < this.state.assets.length - 1) {
        assetListItems.push(<li className="divider"></li>);        
      }
    });

    return (
      <div id="selector-container">
        <div className="col-sm-12 col-md-6 col-lg-4 col-3">
          <input className="form-input" id="coin-selector" type="text"></input>
        </div>
        <ul className="menu menu-float col-sm-12 col-md-6 col-lg-4 col-3">
          {assetListItems}
        </ul>
      </div>
    );
  }
}