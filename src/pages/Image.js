import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import GalNav from './../features/Gallery/GalNav/GalNav'
import GalImage from './../features/Gallery/GalImage/GalImage'
import BannerGiraffeVertical from './../features/Banners/BannerGiraffeVertical'

class ImagePage extends React.Component {

  render() {
    window.scrollTo(0, 0);
    return (
      <div className="single-root">
        <div className="row">
          <div className="col-xs-12 no-pad">
            <div className="row">
              <div className="col-sm-2 hidden-xs single-hidden no-pad">
                <BannerGiraffeVertical/>
              </div>
              <div className="col-xs-12 col-sm-10 single-full no-pad">
                <GalNav galleryId={this.props.params.galleryId} image={this.props.params.image} currentCity={this.props.params.cityName}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImagePage;
