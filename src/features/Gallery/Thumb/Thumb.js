import React from 'react';
import {Link} from 'react-router';

class Thumb extends React.Component {
  render() {
    return (
      <div className="gallery__body__thumb">
        <Link to={'/image/'+this.props.currentId+'/'+this.props.image+'/'+this.props.currentCity}>
          <img className="gallery__body__thumb-img" src={process.env.PUBLIC_URL+"/galleries/"+this.props.currentId+"/small/"+this.props.image} />
        </Link>
      </div>
    );
  }
}

export default Thumb;
