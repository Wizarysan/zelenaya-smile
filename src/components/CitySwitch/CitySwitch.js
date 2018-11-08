import React from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {handleDropdownToggle} from './../../utils/helpers';
import * as cityActions from './CityDuck'


import './CitySwitch.scss';
import IconBurger from './../../assets/svg/Burger.js'

class CitySwitch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    let initialCity = decodeURI(location.href.substr(location.href.lastIndexOf('/') + 1));
    if((initialCity != this.props.city) && this.props.galMap.body.hasOwnProperty(initialCity)) {
      this.handleCityChange(initialCity)
    }
  }

  handleCityChange(city){
    this.props.actions.setCity(city);
  }

  render() {
    return (
      <div className="city_switch pull-right dropdown-wrapper">
        <div className="city_switch__city" onClick={()=>handleDropdownToggle('city-dropdown')}>{this.props.city} <IconBurger /></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.city,
    galMap: state.galMap
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cityActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitySwitch);
