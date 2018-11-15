import React from 'react';
import './Pin.css';

import PinIcon from './../../../assets/svg/Pin_icon.js'

class Pin extends React.Component {
  render() {
    return (
      <div className="pin">
        <PinIcon />
        <img src={process.env.PUBLIC_URL+"/pins/pin_"+this.props.city+".png"} alt="Pin" className="pin__image"/>
      </div>
    );
  }
}

export default Pin;