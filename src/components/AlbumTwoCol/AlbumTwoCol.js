import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import './AlbumTwoCol.scss';
import ArrowCircle from './../../assets/svg/Arrow_circle';
import GalleryCover from './../GalleryCover/GalleryCover';

class AlbumTwoCol extends React.Component {
  constructor(props) {
    super(props);
    this.icons = ['ghost', 'sword', 'lips', 'cherry', 'guitar', 'kitty', 'heart'];
  }

  setIcon() {
    let index = Math.floor(Math.random() * this.icons.length);
    let icon = this.icons[index];
    this.icons.splice(index, 1)
    return icon;
  }

  render() {
    let albums = this.props.galMap[this.props.city].map((album, index) => {
      return (
        <GalleryCover image={`/galleries/${album.id}/cover.jpg`} link={`gallery/${album.id}/${this.props.city}`}
          id={album.id} key={album.id} qty={album.qty} icon={album.icon || this.setIcon()}
          name={album.name} date={album.date} revealForce={true}/>
      )
    });

    //let moreAlbums = this.props.galMap[this.props.city].length-4;

    return (
      <div className="album_2col">
        <audio id="sound-ghost">
        	<source src="galleries/sounds/ghost.wav"></source>
        </audio>
        <audio id="sound-sword">
        	<source src="galleries/sounds/sword.wav"></source>
        </audio>
        <audio id="sound-lips">
        	<source src="galleries/sounds/kiss.wav"></source>
        </audio>
        <audio id="sound-kitty">
        	<source src="galleries/sounds/meow.wav"></source>
        </audio>
        <audio id="sound-cherry">
        	<source src="galleries/sounds/coin.wav"></source>
        </audio>
        <audio id="sound-guitar">
        	<source src="galleries/sounds/guitar.wav"></source>
        </audio>
        <audio id="sound-heart">
        	<source src="galleries/sounds/heart.wav"></source>
        </audio>
        <div className="album_2col__column column-left">
          <div className="album_2col__wrap">
            {albums[0]}
          </div>
          <div className="album_2col__wrap">
            {albums[2]}
          </div>
        </div>
        <div className="album_2col__column column-right shifted">
          <div className="album_2col__wrap">
            {albums[1]}
          </div>
          <div className="album_2col__wrap">
            {albums[3]}
          </div>
          <div className="album_2col__wrap">
            {(albums.length>4) &&
              <Link to={'/city/'+this.props.city}>
                <div className="more">
                  <div className="more__circle horizontal-center">
                    <ArrowCircle/>
                    <div className="more__albums center-both">Остальные<br/>альбомы</div>
                  </div>
                  <span className="more__city center-both">{this.props.city}</span>
                </div>
              </Link>
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    city: state.city,
    galMap: state.galMap
  };
}

export default connect(mapStateToProps)(AlbumTwoCol);
