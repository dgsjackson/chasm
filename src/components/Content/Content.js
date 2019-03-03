import React from 'react';
import './Content.scss';
import CoinSelector from '../CoinSelector/CoinSelector';
import AssetsGrid from '../AssetsGrid/AssetsGrid';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';

export default class Content extends React.Component {

  render() {
    return (
      <div id="content-container">
        <div id="grid-container" className="ag-theme-balham-dark col-sm-12 col-md-9 col-6">
          <AssetsGrid></AssetsGrid>
          <LoadingOverlay/>
        </div>
      </div>
    );
  }
}