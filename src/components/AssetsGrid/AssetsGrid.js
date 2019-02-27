import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import BinanceProvider from '../../providers/BinanceProvider';
import Events from '../../Events';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export default class AssetsGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      grid: {
        columnDefs: [
          { headerName: 'SYM', field: 'symbol' },
          { headerName: 'Price', field: 'price' },
          { headerName: 'Change(%)', field: 'change' },
          { headerName: 'Last', field: 'last' },
          { headerName: 'High', field: 'high' },
          { headerName: 'Low', field: 'low' },
          { headerName: 'Vol', field: 'volume' }
        ],
        rowData: []
      }
    };
    this.resizeColumnsToFit = this.resizeColumnsToFit.bind(this);
    this.onGridReady = this.onGridReady.bind(this);
    this.fetchAssetStats = this.fetchAssetStats.bind(this);
  }

  componentDidMount() {
    Events.on(Events.AssetSelected, this.fetchAssetStats);
  }

  componentWillUnmount() {
    Events.removeListener(Events.AssetSelected, this.fetchAssetStats);
  }

  resizeColumnsToFit(params) {
    params.api.sizeColumnsToFit();
  }

  onGridReady(params) {
    this.api = params.api;
    params.api.sizeColumnsToFit();
  }

  fetchAssetStats(assetSymbol) {
    BinanceProvider.fetchAssetStats(assetSymbol).then(asset => {
      this.api.updateRowData({ add: [asset] });
    }).catch(() => console.alert('Failed to load asset stats from Binance :(.'));
  }

  render() {
    return (
      <AgGridReact 
        columnDefs={this.state.grid.columnDefs}
        rowData={this.state.grid.rowData}
        onGridReady={this.onGridReady}
        onGridSizeChanged={this.resizeColumnsToFit}>
      </AgGridReact>
    );
  }

}