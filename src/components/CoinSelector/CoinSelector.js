import React from 'react';
import BinanceProvider from '../../providers/BinanceProvider';
import _ from 'lodash';
import './CoinSelector.css';

export default class CoinSelector extends React.Component {

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { 
      assets: [], 
      filteredAssets: [], 
      showAssets: false 
    };
  }

  componentDidMount() {
    BinanceProvider.fetchPricesInBTC().then(assets => {
      this.setState({ assets });
    }).catch(() => alert('Failed to load symbols from Binance.'));
  }

  handleInputChange(event) {
    let input = event.target.value;
    let filteredAssets;
    if (_.isEmpty(input)) {
      filteredAssets = this.state.assets;
    } else {
      filteredAssets = _.filter(this.state.assets, asset => asset.symbol.match(input.toUpperCase()));
    }
    this.setState({ filteredAssets });
  }

  render() {
    let assetListItems = [];

    _.each(this.state.filteredAssets, (asset, index) => {
      assetListItems.push(<li key={index} className="menu-item">{asset.symbol}</li>);
      if (index < this.state.assets.length - 1) {
        assetListItems.push(<li key={asset.symbol} className="divider"></li>);        
      }
    });

    return (
      <div id="selector-container">
        <div className="col-sm-12 col-md-6 col-lg-4 col-3">
          <input className="form-input" 
                  id="coin-selector" 
                  type="text" 
                  onChange={this.handleInputChange}
                  onFocus={() => this.setState({ showSymbols: true })}
                  onBlur={() => this.setState({ showSymbols: false })}
                  autocomplete="off">
          </input>
        </div>
        {
          this.state.showSymbols &&
          <ul className="menu menu-float col-sm-12 col-md-6 col-lg-4 col-3">
            {assetListItems}
          </ul>
        }
        
      </div>
    );
  }
}