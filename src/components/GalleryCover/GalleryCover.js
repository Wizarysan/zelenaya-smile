import React from 'react';
import {Link} from 'react-router';
import ScrollReveal from 'scrollreveal';
import './GalleryCover.css';

import ArrowRight from './../../assets/svg/Arrow_right.js'
import AlbumGhost from './../../assets/svg/Album_ghost.js'
import AlbumSword from './../../assets/svg/Album_sword.js'
import AlbumLips from './../../assets/svg/Album_lips.js'
import AlbumCherry from './../../assets/svg/Album_cherry.js'
import AlbumGuitar from './../../assets/svg/Album_guitar.js'
import AlbumKitty from './../../assets/svg/Album_kitty.js'
import AlbumHeart from './../../assets/svg/Album_heart.js'

class GalleryCover extends React.Component {
  constructor(props) {
    super(props);
    this.sr = ScrollReveal();
  }

  componentDidMount() {
    let horOffset;
    (window.innerHeight < 900) ? horOffset = -300 :  horOffset = -100;
    if(this.props.revealForce) {
      this.sr.reveal('.gallery_cover__textwrap', {viewOffset: { bottom: horOffset }, afterReveal: function (domEl) {
        domEl.querySelector('.gallery_cover__icon').classList.add('active');
      }});
    }
  }

  handleSound(icon){
    document.getElementById(`sound-${icon}`).play();
  }

  chooseCoverIcon(icon) {
    switch(icon) {
      case 'ghost':
        return <AlbumGhost/>;
      case 'sword':
        return <AlbumSword/>;
      case 'lips':
        return <AlbumLips/>;
      case 'cherry':
        return <AlbumCherry/>;
      case 'guitar':
        return <AlbumGuitar/>;
      case 'kitty':
        return <AlbumKitty/>;
      case 'heart':
        return <AlbumHeart/>;
      default:
        return '';
    }
  }

  render() {
    return (
      <div className="gallery_cover text-center">
        <Link to={this.props.link} >
          <div className="text-left gallery_cover__textwrap">
            <div className="js-play-sound" onMouseEnter={()=>this.handleSound(this.props.icon)}>
              {this.chooseCoverIcon(this.props.icon)}
            </div>
            <div className="gallery_cover__hover photoshadow-grey">
              <img src={this.props.image} className="gallery_cover__image" alt=""/>
              <div className="gallery_cover__hover-green">
                <div className="gallery_cover__hover-photos center-both">
                  <div className="gallery_cover__hover-digit">{this.props.qty}</div>
                  <div className="gallery_cover__hover-text">фото</div>
                </div>
              </div>
            </div>
            <br/>
            <span className="gallery_cover__name">{this.props.name}<ArrowRight /></span>
            <br/>
            <span className="gallery_cover__date">{this.props.date}</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default GalleryCover;
