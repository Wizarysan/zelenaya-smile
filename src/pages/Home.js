import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import BannerGiraffe from './../components/Banners/BannerGiraffe'
import NavTop from './../components/NavTop/NavTop'
import Socials from './../components/Socials/Socials'
import AlbumTwoCol from './../components/AlbumTwoCol/AlbumTwoCol'
import CityMap from './../components/CityMap/CityMap'
import Footer from './../components/Footer/Footer'

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
      <Fragment>

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

      </Fragment>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    city: state.city
  };
}

export default connect(mapStateToProps, null)(HomePage);
