import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="container-fluid no-pad">
        {this.props.children}
      </div>
    );
  }
}

export default App;
