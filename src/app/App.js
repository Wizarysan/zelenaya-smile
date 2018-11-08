import React, { Component } from 'react';
import './App.scss';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as galMapActions from './../components/GalMap/GalMapDuck';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchGalMap();
  }

  render() {
    return (
      <div className="container-fluid no-pad">
        {this.props.children}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(galMapActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
