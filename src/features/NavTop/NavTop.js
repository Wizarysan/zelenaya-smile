import React from 'react';
import {Link} from 'react-router';
import './NavTop.css';

import CitySwitch from './../CitySwitch/CitySwitch';
import CityList from './../CityMap/CityList';

import logo_main from './../../assets/images/logo_main.png';
import LogoSmile from './../../assets/svg/Logo_smile';
import LogoMain from './../../assets/svg/Logo_main';

class NavTop extends React.Component {
  render() {
    return (
      <div className="nav_top">
        <div className="nav_top__dropdown dropdown" id="city-dropdown">
          <CityList type={this.props.cityListType} />
        </div>
        <div className="row nav_top__bottom">
          <div className="col-xs-12 col-sm-3 no-pad">
            <a href='http://zelenaya.net' className="nav_top__tooltip" target="_blank">
              <LogoMain />
              <span className="nav_top__tooltip-text vertical-center">на сайт <span className="green-text">zelenaya.net</span></span>
            </a>
          </div>
          <div className="col-xs-12 col-sm-4 col-sm-offset-1 nav_top__logo_smile">
            <Link to='/'>
              <LogoSmile />
            </Link>
          </div>
          <div className="col-xs-12 col-sm-4 pull-right no-pad">
            <div className="center-block">
              <CitySwitch/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavTop;
