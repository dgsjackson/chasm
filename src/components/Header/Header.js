import React from 'react';
import './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header id="app-header" className="navbar">
        <section className="navbar-section">
          <span id="header-brand">CHASM</span>
          <span className="navbar-item">Making the lucrative lucid.</span>
        </section>
        <section class="navbar-section">
          <span class="navbar-item">About</span>
        </section>
      </header>
    );
  }
}