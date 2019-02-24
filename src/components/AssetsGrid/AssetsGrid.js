import React from 'react';
import { AgGridReact } from 'ag-grid-react';
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
        rowData: [
          {
            symbol: 'XRP',
            price: '0.000023',
            change: '3.1',
            last: '0.000024',
            high: '0.000026',
            low: '0.000022',
            volume: '75863757'
          }
        ]
      }
    };
    this.resizeColumnsToFit = this.resizeColumnsToFit.bind(this);
  }

  resizeColumnsToFit(params) {
    params.api.sizeColumnsToFit();
  }

  render() {
    return (
      <AgGridReact 
        columnDefs={this.state.grid.columnDefs}
        rowData={this.state.grid.rowData}
        onGridReady={this.resizeColumnsToFit}
        onGridSizeChanged={this.resizeColumnsToFit}>
      </AgGridReact>
    );
  }

}