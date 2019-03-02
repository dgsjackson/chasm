import React from 'react';
import './Content.css';
import CoinSelector from '../CoinSelector/CoinSelector';
import AssetsGrid from '../AssetsGrid/AssetsGrid';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';

export default class Content extends React.Component {

  render() {
    return (
      <div id="content-container">
        <CoinSelector/>
        <div id="grid-container" className="ag-theme-balham col-sm-12 col-md-9 col-6">
          <AssetsGrid></AssetsGrid>
        </div>
        <LoadingOverlay/>
      </div>
    );
  }
}