import React, {Fragment} from 'react';

import NavTop from './../components/NavTop/NavTop'
import Socials from './../components/Socials/Socials'
import AlbumCity from './../components/AlbumCity/AlbumCity'
import CityMap from './../components/CityMap/CityMap'
import Footer from './../components/Footer/Footer'

class CityPage extends React.Component {
  render() {
    return (
      <Fragment>

        <Socials city={this.props.params.cityName}/>
        <NavTop cityListType="city"/>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <AlbumCity targetCity={this.props.params.cityName}/>
          </div>
        </div>
        <div className="row back-grey">
          <div className="col-xs-12">
            <CityMap />
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

export default CityPage;
