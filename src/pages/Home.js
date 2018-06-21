import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import BannerGiraffe from './../features/Banners/BannerGiraffe'
import NavTop from './../features/NavTop/NavTop'
import Socials from './../features/Socials/Socials'
import AlbumTwoCol from './../features/AlbumTwoCol/AlbumTwoCol'
import CityMap from './../features/CityMap/CityMap'
import Footer from './../features/Footer/Footer'

import {cityGWName} from './../utils/helpers';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title='Улыбнись :) - Зелёная точка';
  }

  render() {
    return (
      <div>

        <Socials />

        <div className="row">
          <div className="col-xs-12 no-pad">
            <BannerGiraffe cityGW={cityGWName[this.props.city]} />
          </div>
        </div>

        <NavTop cityListType="top"/>

        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <AlbumTwoCol />
          </div>
        </div>

        <div className="row back-grey">
          <div className="col-xs-12">
            <CityMap cityListType="map"/>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12">
            <Footer />
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    city: state.city
  };
}

export default connect(mapStateToProps, null)(HomePage);
