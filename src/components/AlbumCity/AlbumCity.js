import React from 'react';
import ScrollReveal from 'scrollreveal';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
//Borrowed action to reduce duplicate code
import * as cityActions from './../CitySwitch/CityDuck';

import './AlbumCity.scss';
import ArrowCircle from './../../assets/svg/Arrow_circle';
import GalleryCover from './../GalleryCover/GalleryCover';

export class AlbumCity extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if (this.props.city != this.props.targetCity) {
      this.props.actions.setCity(this.props.targetCity);
    }
  }

  componentDidMount() {
    let sr = ScrollReveal();
    sr.reveal('.gallery_cover__textwrap', {viewOffset: { bottom: -300 },distance: '50px', rotate: { x: 10, y: 10, z: 10 }});

    function revealRestAlbum() {
      document.querySelector('.album_flex__rest-album').classList.add('active');
      document.querySelector('.js-album-rest').classList.add('hidden');
    }

    //TODO rewrite tu universal cut?
    document.querySelector('.js-album-rest').addEventListener('click', revealRestAlbum);

    var ticking = false;

    function checkAlbumReveal(offset) {
      let rect = document.querySelector('.js-album-rest').getBoundingClientRect();
      if(rect.top + rect.height + offset < window.innerHeight) {
        revealRestAlbum();
      }
    }

    window.addEventListener('scroll', function(e) {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          checkAlbumReveal(150);
          ticking = false;
        });
      }
      ticking = true;
    });
  }

  render() {
    window.scrollTo(0, 0);
    //TODO move to local state with cdm init?
    //Must render loading block here instead during gallerymap json fetching
    let albums = this.props.galMap.body[this.props.city].map((album, index) => {
      return (
        <div className="album_flex__item" key={index}>
          <GalleryCover image={`/galleries/${album.id}/cover.jpg`} link={`/gallery/${album.id}/${this.props.city}`}
            id={album.id} qty={album.qty}  name={album.name} date={album.date}/>
        </div>
      )
    });
    let flexInitial = albums.slice(0, 6);
    let flexRest = albums.slice(6);

    return (
      <div>
        <div className="album_flex">
          {flexInitial}
          <div className="album_flex album_flex__rest-album">
            {flexRest}
          </div>
        </div>
        {(albums.length>4) &&
          <div className="album_flex__rest js-album-rest">
            <ArrowCircle/>
          </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.city,
    galMap: state.galMap
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cityActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCity);
