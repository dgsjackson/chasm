import React from 'react';
import './Survey.scss';

export default class Survey extends React.Component {

  render() {

    let metrics = [
      { name: 'SYM', value: 'NANO' },
      { name: 'Price', value: '0.00453005' },
      { name: 'Change (%)', value: '4.4' },
      { name: 'Last', value: '0.00485050' },
      { name: 'High', value: '0.00486430' },
      { name: 'Low', value: '0.00434110' },
      { name: 'Volume', value: '153.35650' }
    ];

    let metricTiles = metrics.map(metric => MetricTile(metric));

    return (
      <div className="survey-grid">
        <div className="chart"></div>
        {metricTiles}
      </div>
    );
  }

}

function MetricTile(props) {
  return (
    <div key={props.name} className="metric-tile">
      <span className="tile-name">{props.name}</span>
      <span className="tile-value">{props.value}</span>
    </div>
  );
}