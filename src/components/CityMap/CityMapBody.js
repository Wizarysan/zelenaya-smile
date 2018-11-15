import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hoverTargetActive} from './../../utils/helpers';
import * as cityActions from './../CitySwitch/CityDuck';
import Pin from './Pin/Pin';

import mapBack from './../../assets/images/map_back.png';
import './CityMap.css';

class CityMapBody extends React.Component {

  handleCityChange(city){
    this.props.actions.setCity(city);
  }

  componentDidMount() {
    hoverTargetActive(document.querySelectorAll('.map__body__pin'));
  }

  render() {
    return (
      <div className="map text-center">
        <div className="map__body">
          <img src={mapBack} className="map__body__image" alt=""/>
          <span className="map__body__caption horizontal-center">16 городов России</span>
          <Link to={'/city/Ставрополь'}>
            <div className="map__body__pin" id="pin-stavropol" data-target="#list-stavropol" onClick={()=>this.handleCityChange('Ставрополь')}>
              <Pin city={'Ставрополь'} />
            </div>
          </Link>
          <Link to={'/city/Елец'}>
            <div className="map__body__pin" id="pin-elets" data-target="#list-elets" onClick={()=>this.handleCityChange('Елец')}>
              <Pin city={'Елец'} />
            </div>
          </Link>
          <Link to={'/city/Липецк'}>
            <div className="map__body__pin" id="pin-lipetsk" data-target="#list-lipetsk" onClick={()=>this.handleCityChange('Липецк')}>
              <Pin city={'Липецк'} />
            </div>
          </Link>
          <Link to={'/city/Белгород'}>
            <div className="map__body__pin" id="pin-belgorod" data-target="#list-belgorod" onClick={()=>this.handleCityChange('Белгород')}>
              <Pin city={'Белгород'} />
            </div>
          </Link>
          <Link to={'/city/Тамбов'}>
            <div className="map__body__pin" id="pin-tambov" data-target="#list-tambov" onClick={()=>this.handleCityChange('Тамбов')}>
              <Pin city={'Тамбов'} />
            </div>
          </Link>
          <Link to={'/city/Белорецк'}>
            <div className="map__body__pin" id="pin-beloretsk" data-target="#list-beloretsk" onClick={()=>this.handleCityChange('Белорецк')}>
              <Pin city={'Белорецк'} />
            </div>
          </Link>
          <Link to={'/city/Элиста'}>
            <div className="map__body__pin" id="pin-elista" data-target="#list-elista" onClick={()=>this.handleCityChange('Элиста')}>
              <Pin city={'Элиста'} />
            </div>
          </Link>
          <Link to={'/city/Невинномысск'}>
            <div className="map__body__pin" id="pin-nevinka" data-target="#list-nevinka" onClick={()=>this.handleCityChange('Невинномысск')}>
              <Pin city={'Невинномысск'} />
            </div>
          </Link>
          <Link to={'/city/Томск'}>
            <div className="map__body__pin" id="pin-tomsk" data-target="#list-tomsk" onClick={()=>this.handleCityChange('Томск')}>
              <Pin city={'Томск'} />
            </div>
          </Link>
          <Link to={'/city/Владивосток'}>
            <div className="map__body__pin" id="pin-vladivostok" data-target="#list-vladivostok" onClick={()=>this.handleCityChange('Владивосток')}>
              <Pin city={'Владивосток'} />
            </div>
          </Link>
          <Link to={'/city/Уфа'}>
            <div className="map__body__pin" id="pin-ufa" data-target="#list-ufa" onClick={()=>this.handleCityChange('Уфа')}>
              <Pin city={'Уфа'} />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cityActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(CityMapBody);
