import React from 'react';
import './Header.scss';
import CoinSelector from '../CoinSelector/CoinSelector';

export default class Header extends React.Component {
  render() {
    return (
      <header id="app-header" className="navbar">
        <section className="navbar-section">
          <span id="header-brand">CHASM</span>
          <span className="navbar-item">: Financial asset data and metrics :</span>
        </section>
        <section className="navbar-section selector-container">
          <CoinSelector/>
        </section>
        <section class="navbar-section">
          <span class="navbar-item">About</span>
        </section>
      </header>
    );
  }
}