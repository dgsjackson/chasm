import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './Header/Header';
import Content from './Content/Content';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default hot(module)(App);