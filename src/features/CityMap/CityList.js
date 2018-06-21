import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hoverTargetActive, handleDropdownToggle} from './../../utils/helpers';
import * as cityActions from './../CitySwitch/CityDuck';

import MapIcon from './../../assets/svg/Map_icon.js';
import './CityMap.css';

class CityList extends React.Component {

  handleCityChange(city){
    this.props.actions.setCity(city);
  }

  componentDidMount() {
    hoverTargetActive(document.querySelectorAll('.map__list-item'));
  }


  render() {
    {/*TODO Рефактор в цикл*/}
    return(
      <div className="map__list" >
        {(this.props.type == 'map') && <MapIcon />}
        <p className="map__list-title">Фотографии в других городах</p>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <ul className="map__list-ul">
              <Link to={(this.props.type == 'top') ? '' : '/city/Белгород'}>
                <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-belgorod'} data-target="#pin-belgorod"
                onClick={()=> {
                  this.handleCityChange('Белгород');
                  handleDropdownToggle('city-dropdown', 'close');
                }}>
                <span className="map__list-name">Белгород</span> <span className="map__list-qty">{this.props.galMap['Белгород'].length}</span>
                </li>
              </Link>
              <li className="map__list-item inactive">Ефремов <span className="map__list-qty"></span></li>
              <li className="map__list-item inactive">Нальчик <span className="map__list-qty"></span></li>
                <Link to={(this.props.type == 'top') ? '' : '/city/Тамбов'}>
                  <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-tambov'} data-target="#pin-tambov"
                  onClick={()=> {
                    this.handleCityChange('Тамбов');
                    handleDropdownToggle('city-dropdown', 'close');
                  }}>
                  <span className="map__list-name">Тамбов</span> <span className="map__list-qty">{this.props.galMap['Тамбов'].length}</span>
                  </li>
                </Link>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-3">
            <ul className="map__list-ul">
              <Link to={(this.props.type == 'top') ? '' : '/city/Белорецк'}>
                <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-beloretsk'} data-target="#pin-beloretsk"
                onClick={()=> {
                  this.handleCityChange('Белорецк');
                  handleDropdownToggle('city-dropdown', 'close');
                }}>
                <span className="map__list-name">Белорецк</span> <span className="map__list-qty">{this.props.galMap['Белорецк'].length}</span>
                </li>
              </Link>
              <Link to={(this.props.type == 'top') ? '' : '/city/Кочубеевское'}>
                <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-kochub'} data-target="#pin-kochub"
                onClick={()=> {
                  this.handleCityChange('Кочубеевское');
                  handleDropdownToggle('city-dropdown', 'close');
                }}>
                <span className="map__list-name">Кочубеевское</span> <span className="map__list-qty">{this.props.galMap['Кочубеевское'].length}</span>
                </li>
              </Link>
              <Link to={(this.props.type == 'top') ? '' : '/city/Невинномысск'}>
                <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-nevinka'} data-target="#pin-nevinka"
                onClick={()=> {
                  this.handleCityChange('Невинномысск');
                  handleDropdownToggle('city-dropdown', 'close');
                }}>
                <span className="map__list-name">Невинномысск</span> <span className="map__list-qty">{this.props.galMap['Невинномысск'].length}</span>
                </li>
              </Link>
              <Link to={(this.props.type == 'top') ? '' : '/city/Томск'}>
                <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-tomsk'} data-target="#pin-tomsk"
                onClick={()=> {
                  this.handleCityChange('Томск');
                  handleDropdownToggle('city-dropdown', 'close');
                }}>
                <span className="map__list-name">Томск</span> <span className="map__list-qty">{this.props.galMap['Томск'].length}</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-3">
            <ul className="map__list-ul">
              <Link to={(this.props.type == 'top') ? '' : '/city/Владивосток'}>
                <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-vladivostok'} data-target="#pin-vladivostok"
                onClick={()=> {
                  this.handleCityChange('Владивосток');
                  handleDropdownToggle('city-dropdown', 'close');
                }}>
                <span className="map__list-name">Владивосток</span> <span className="map__list-qty">{this.props.galMap['Владивосток'].length}</span>
                </li>
              </Link>
              <Link to={(this.props.type == 'top') ? '' : '/city/Липецк'}>
                <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-lipetsk'} data-target="#pin-lipetsk"
                onClick={()=> {
                  this.handleCityChange('Липецк');
                  handleDropdownToggle('city-dropdown', 'close');
                }}>
                <span className="map__list-name">Липецк</span> <span className="map__list-qty">{this.props.galMap['Липецк'].length}</span>
                </li>
              </Link>
              <li className="map__list-item inactive">Нефтекамск <span className="map__list-qty"></span></li>
              <Link to={(this.props.type == 'top') ? '' : '/city/Уфа'}>
                <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-ufa'} data-target="#pin-ufa"
                onClick={()=> {
                  this.handleCityChange('Уфа');
                  handleDropdownToggle('city-dropdown', 'close');
                }}>
                <span className="map__list-name">Уфа</span> <span className="map__list-qty">{this.props.galMap['Уфа'].length}</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-xs-6 col-sm-3">
            <ul className="map__list-ul">
              <Link to={(this.props.type == 'top') ? '' : '/city/Елец'}>
                <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-elets'} data-target="#pin-elets"
                onClick={()=> {
                  this.handleCityChange('Елец');
                  handleDropdownToggle('city-dropdown', 'close');
                }}>
                <span className="map__list-name">Елец</span> <span className="map__list-qty">{this.props.galMap['Елец'].length}</span>
                </li>
              </Link>
              <li className="map__list-item inactive">Москва <span className="map__list-qty"></span></li>
              <Link to={(this.props.type == 'top') ? '' : '/city/Ставрополь'}>
                <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-stavropol'} data-target="#pin-stavropol"
                onClick={()=> {
                  this.handleCityChange('Ставрополь');
                  handleDropdownToggle('city-dropdown', 'close');
                }}>
                <span className="map__list-name">Ставрополь</span> <span className="map__list-qty">{this.props.galMap['Ставрополь'].length}</span>
                </li>
              </Link>
              <Link to={(this.props.type == 'top') ? '' : '/city/Элиста'}>
                <li className="map__list-item" id={(this.props.type == 'top') ? '' : 'list-elista'} data-target="#pin-elista"
                onClick={()=> {
                  this.handleCityChange('Элиста');
                  handleDropdownToggle('city-dropdown', 'close');
                }}>
                <span className="map__list-name">Элиста</span> <span className="map__list-qty">{this.props.galMap['Элиста'].length}</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    city: state.city,
    galMap: state.galMap,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cityActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
