import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as galMapActions from './../components/GalMap/GalMapDuck';

class App extends Component {
  componentDidMount() {
    this.props.actions.fetchGalMap();
  }

  render() {
    let galMapError = null;
    if(this.props.error) {
      galMapError = <div className="global-error">Произошла ошибка при загрузке списка галерей. 
        Данные могут быть неактуальны. Пожалуйста, перезагрузите страницу</div>
    }

    return (
      <div className="container-fluid no-pad">
        {galMapError}
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.galMap.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(galMapActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
