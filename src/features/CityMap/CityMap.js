import React from 'react';
import CityList from './CityList'
import CityMapBody from './CityMapBody'
import './CityMap.css';

const CityMap = (props) => {
    return (
      <div className="map__wrapper">
        <CityList type="map"/>
        <CityMapBody/>
      </div>
    );
}

export default CityMap;
