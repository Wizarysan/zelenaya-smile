import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Delay from 'react-delay';
import {loadGallery} from './GalleryDuck'
import Thumb from './Thumb/Thumb.js';

import Share from './../Share/Share';

import './GalleryDuck.js';
import './Gallery.scss';

import ArrowLeft from './../../assets/svg/Arrow_left.js'
import like_pattern from './../../assets/images/like-pattern.jpg'

class Gallery extends React.Component {

  getImages() {
    return this.props.galBody.map((image, index) => {
      return (
        <Thumb currentId={this.props.currentId} image={image} key={index} currentCity={this.props.currentCity}/>
      )
    });
  }

//TODO ПОЧТИ одинаковый функционал с GalNav - рефактор
  getGalleryTitle() {
    return this.props.galMap[this.props.currentCity].find(item=>item.id==this.props.id).name
  }
  //TODO слить в одну функцию получения из галереи чего угодно?
  getGalleryDate() {
    return this.props.galMap[this.props.currentCity].find(item=>item.id==this.props.id).date
  }

  componentWillMount() {
    if (this.props.currentId != this.props.id) {
      this.props.dispatch(loadGallery(this.props.id));
    }
  }

  componentDidMount() {
    document.title = this.getGalleryTitle();
  }

  render() {

    window.onresize = function(event) {
     Array.from(document.querySelectorAll('.gallery__body__thumb')).forEach((item)=> {
       {/*Тут сдвигаем ряды фоток туда-сюда*/}
     });
    };

    let images = this.getImages(),
        firstImages, secondImages, restImages;
    (images.length>30)? firstImages = images.slice(0, 30) : firstImages = images;
    (images.length>100)? secondImages = images.slice(31, 100) : secondImages = images.slice(31);
    (images.length>150)? restImages = images.slice(101) : restImages = null;

    return (
      <div className="gallery">
        <h1 className="gallery__title text-center">{this.getGalleryTitle()}</h1>
        <div className="gallery__date text-center">{this.getGalleryDate()}</div>
        <div className="gallery__share" style={{backgroundImage: `url(${like_pattern})`}}>
          <div className="row gallery__share-block">
            <div className="gallery__share-line">Поделись с друзьями</div>
            <div className="gallery__share-line">
              <Share size={60} image={location.protocol + '//' + location.host + process.env.PUBLIC_URL+"/galleries/"+this.props.currentId+"/cover.jpg"}/>
            </div>
            <div className="gallery__share-line ">этим альбомом</div>
          </div>
        </div>
        <div className="col-xs-12 col-md-10 col-md-offset-1">
          <div className="gallery__nav">
            <div>
              <Link to={`/city/${this.props.currentCity}`} className="col-xs-3 gallery__nav__backlink bottom">
                <ArrowLeft />
                <span className="gallery__back mobile-hide">К выбору альбомов</span>
                <span className="gallery__back mobile-show">К альбомам</span>
              </Link>
            </div>
            <div className="gallery__time col-xs-5 text-center">
            </div>
            <div className="gallery__count col-xs-4 pull-right text-right">
              <span>{this.props.galBody.length} фото</span>
            </div>
          </div>
          <div className="gallery__body">
            {firstImages}
            <Delay wait={1000}>
              <span>
                {secondImages}
              </span>
            </Delay>
            <Delay wait={3000}>
              <span>
                {restImages}
              </span>
            </Delay>
          </div>
          <div className="gallery__nav">
            <div>
              <Link to={`/city/${this.props.currentCity}`} className="col-xs-3 gallery__nav__backlink">
                <ArrowLeft />
                <span className="gallery__back mobile-hide">К выбору альбомов</span>
                <span className="gallery__back mobile-show">К альбомам</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentId: state.activeGallery.activeGalleryId,
    galBody: state.activeGallery.body,
    galMap: state.galMap,
  };
}

export default connect(mapStateToProps)(Gallery);
