import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <header id="app-header" className="navbar">
          <section className="navbar-section">
            <h3 id="header-brand" className="navbar-brand">CryptoMania!</h3>
            <span className="navbar-item">Making the lucrative lucid</span>
          </section>
          <section>
            <span>About</span>
          </section>
        </header>
        <div id="content-container">
          <div className="column col-sm-12 col-md-6 col-lg-4 col-3">
            <input className="form-input" id="coin-list" type="text"></input>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);