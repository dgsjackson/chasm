import React from 'react';
import BinanceProvider from '../../providers/BinanceProvider';
import Events from '../../Events';
import _ from 'lodash';
import './CoinSelector.css';

export default class CoinSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      assets: [], 
      filteredAssets: [], 
      showSymbols: false 
    };
    this.inputRef = React.createRef();
    this.menuRef = React.createRef();
    this.filterAssets = this.filterAssets.bind(this);
    this.selectAsset = this.selectAsset.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleDocumentClick);
    BinanceProvider.fetchPricesInBTC().then(assets => {
      this.setState({ assets, filteredAssets: assets });
    }).catch(() => alert('Failed to load symbols from Binance.'));
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleDocumentClick);
  }

  filterAssets(event) {
    let input = event.target.value;
    let filteredAssets;
    if (_.isEmpty(input)) {
      filteredAssets = this.state.assets;
    } else {
      filteredAssets = _.filter(this.state.assets, asset => asset.symbol.match(input.toUpperCase()));
    }
    this.setState({ filteredAssets });
  }

  selectAsset(assetSymbol) {
    Events.trigger(Events.AssetSelected, [assetSymbol]);
  }

  handleDocumentClick(event) {
    let [input, menu] = [this.inputRef.current, this.menuRef.current];
    let isClickOutside = input && !input.contains(event.target) && menu && !menu.contains(event.target);
    if (isClickOutside) {
      this.setState({ showSymbols: false });
    }
  }

  render() {
    let assetListItems = [];

    _.each(this.state.filteredAssets, (asset, index) => {
      assetListItems.push((
        <li key={asset.symbol} className="menu-item">
          <a onClick={() => this.selectAsset(asset.symbol)}>
            <div className="asset-list-item-content">
              <span>{asset.symbol}</span>
              <span>{asset.price} <i className="fab fa-btc"></i></span>
            </div>  
          </a>  
        </li>
      ));
      if (index < this.state.filteredAssets.length - 1) {
        assetListItems.push(<li key={index} className="divider"></li>);        
      }
    });

    return (
      <div id="selector-container">
        <div className="col-sm-12 col-md-6 col-lg-4 col-3">
          <input id="coin-selector"
            className="form-input"
            type="text"
            onChange={this.filterAssets}
            onFocus={() => this.setState({ showSymbols: true })}
            autoComplete="off"
            ref={this.inputRef}>
          </input>
        </div>
        {
          this.state.showSymbols &&
          <ul id="asset-list" 
            className="menu menu-float col-sm-12 col-md-6 col-lg-4 col-3"
            ref={this.menuRef}>
            {assetListItems}
          </ul>
        }
      </div>
    );
  }
}