import React from 'react';

class GalImage extends React.Component {
  render() {
    return(<img className="gal_nav__photo__image img-responsive center-both"
    src={process.env.PUBLIC_URL+"/galleries/"+this.props.currentId+"/big/"+this.props.image} alt="" />)
  }
}

export default GalImage;
