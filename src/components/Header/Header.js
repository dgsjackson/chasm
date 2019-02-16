import React from 'react';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <header id="app-header" className="navbar">
        <section className="navbar-section">
          <h3 id="header-brand" className="navbar-brand">CryptoMania!</h3>
          <span className="navbar-item">Making the lucrative lucid</span>
        </section>
        <section>
          <span>About</span>
        </section>
      </header>
    );
  }
}