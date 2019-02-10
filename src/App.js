import React from 'react';
import { hot } from 'react-hot-loader';

const styles = {
    marginTop: 100,
    marginLeft: 100,
    border: '1px solid black'
};

class App extends React.Component {
    render() {
        return (
            <div className="app" style={styles}>
                <h1> Welcome to my first React app! </h1>
            </div>
        );
    }
}

export default hot(module)(App);