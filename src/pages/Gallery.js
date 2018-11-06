import React, {PropTypes} from 'react';
import {Link} from 'react-router';

import NavTop from './../components/NavTop/NavTop'
import Socials from './../components/Socials/Socials'
import Gallery from './../components/Gallery/Gallery'

class GalleryPage extends React.Component {

  render() {
    window.scrollTo(0, 0);
    return (
      <div>
        <Socials />
        {/*<NavTop />*/}
        <div className="row">
          <Gallery id={+this.props.params.id} currentCity={this.props.params.cityName}/>
        </div>
      </div>
    )
  }
}

export default GalleryPage;
