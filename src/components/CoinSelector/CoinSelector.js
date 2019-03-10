import React from 'react';
import PropTypes from 'prop-types';
import BinanceProvider from '../../providers/BinanceProvider';
import Events from '../../Events';
import _ from 'lodash';
import './CoinSelector.scss';

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

  filterAssets = event => {
    let input = event.target.value;
    let filteredAssets = _.isEmpty(input) 
      ? this.state.assets 
      : _.filter(this.state.assets, asset => asset.symbol.match(input.toUpperCase()));
    this.setState({ filteredAssets });
  }

  handleDocumentClick = () => {
    let [input, menu] = [this.inputRef.current, this.menuRef.current];
    let isClickOutside = input && !input.contains(event.target) && menu && !menu.contains(event.target);
    if (isClickOutside) {
      this.setState({ showSymbols: false });
    }
  }

  render() {
    let assetListItems = [];

    _.each(this.state.filteredAssets, (asset, index) => {
      assetListItems.push(<AssetListItem key={asset.symbol} asset={asset}/>);
      if (index < this.state.filteredAssets.length - 1) {
        assetListItems.push(<li key={index} className="divider"></li>);        
      }
    });

    return (
      <div id="selector-container">
        <input id="selector-input"
          className="form-input"
          type="text"
          onChange={this.filterAssets}
          onFocus={() => this.setState({ showSymbols: true })}
          autoComplete="off"
          placeholder="SYMBOLS..."
          ref={this.inputRef}>
        </input>
        {
          this.state.showSymbols &&
          <ul id="asset-list" 
            className="menu menu-float"
            ref={this.menuRef}>
            {assetListItems}
          </ul>
        }
      </div>
    );
  }
}

function AssetListItem(props) {
  return (
    <li className="menu-item asset-list-item">
      <a onClick={() => selectAsset(props.asset.symbol)}>
        <div className="asset-list-item-content">
          <span>{props.asset.symbol}</span>
          <span><i className="fab fa-btc"></i> {props.asset.price} </span>
        </div>  
      </a>  
    </li>
  );
}

AssetListItem.propTypes = {
  asset: PropTypes.objectOf(PropTypes.string).isRequired
};

function selectAsset(assetSymbol) {
  Events.trigger(Events.AssetSelected, [assetSymbol]);
}