import React, {Fragment} from 'react';

import Socials from './../components/Socials/Socials'
import Gallery from './../components/Gallery/Gallery'

class GalleryPage extends React.Component {
  render() {
    window.scrollTo(0, 0);
    return (
      <Fragment>
        
        <Socials />
        <div className="row">
          <Gallery id={+this.props.params.id} currentCity={this.props.params.cityName}/>
        </div>

      </Fragment>
    )
  }
}

export default GalleryPage;
