import React from 'react';
import './Content.scss';
import AssetsGrid from '../AssetsGrid/AssetsGrid';
import LoadingOverlay from '../LoadingOverlay/LoadingOverlay';
import Survey from '../Survey/Survey';

export default class Content extends React.Component {

  render() {
    return (
      <div id="content-container" class="container">
        <div className="columns">
          <div id="grid-container" className="col-md-12 col-6">
            <AssetsGrid></AssetsGrid>
            <LoadingOverlay/>
          </div>
          <div id="survey-container" className="col-md-12 col-6">
            <Survey/>
          </div>
        </div>
      </div>
    );
  }
}