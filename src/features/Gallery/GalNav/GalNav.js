import React from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {CSSTransitionGroup} from 'react-transition-group';
import Swipeable from 'react-swipeable';
import {loadGallery} from './../GalleryDuck';
import './GalNav.css';

import Share from './../../Share/Share';
import GalImage from './../GalImage/GalImage';

import CrossIcon from './../../../assets/svg/Cross_icon.js'
import ArrowLeft from './../../../assets/svg/Arrow_left.js'
import ArrowRight from './../../../assets/svg/Arrow_right.js'

class GalNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {single:false};
    this.zoom = this.zoom.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    console.log(e.keyCode)
    // if(e.keyCode == '27') {
    //     browserHistory.push('/gallery/'+this.props.currentId);
    //  }
  }

  getGalleryTitle() {
    return this.props.galMap[this.props.currentCity].find(item=>item.id==this.props.galleryId).name;
  }

  componentWillMount() {
    //if (this.props.currentId != +this.props.galleryId) {
      this.props.dispatch(loadGallery(this.props.galleryId));
    //}
    document.title = this.getGalleryTitle();
  }

  // photoPageHandler = function(e) {
  //   if(e.keyCode == '37') {
  //     browserHistory.push('/image/'+this.props.currentId+'/'+prevImageIndex);
  //   }
  //   if(e.keyCode == '39') {
  //     browserHistory.push('/image/'+this.props.currentId+'/'+nextImageIndex);
  //   }
  // }

  swipedRight(){
    document.getElementById('js-prev-image').click();
  }

  swipedLeft(){
    document.getElementById('js-next-image').click();
  }

  zoom(){
    this.setState({
      single: !this.state.single
    })
    document.querySelector('.single-root').classList.toggle('no-nav');
  }

  render() {
    const gallBody = this.props.galleryBody,
          currentId = this.props.currentId,
          currentImageIndex = gallBody.findIndex((element, index)=> {
            return element == this.props.image;
          });
    let nextImageIndex,
        prevImageIndex;

    if (gallBody.length > 1) {
      if(currentImageIndex == 0) {
        nextImageIndex = gallBody[currentImageIndex+1];
        prevImageIndex = gallBody[gallBody.length-1];
      }
      else if(currentImageIndex == gallBody.length-1) {
        nextImageIndex = gallBody[0];
        prevImageIndex = gallBody[currentImageIndex-1];
      }
      else {
        nextImageIndex = gallBody[currentImageIndex+1];
        prevImageIndex = gallBody[currentImageIndex-1];
      }
    }

    //Preloading images
    //TODO рефактор адреса + создание image один раз
    let nextImage = new Image();
    nextImage.src = location.protocol + '//' + location.host + process.env.PUBLIC_URL+"/galleries/"+this.props.currentId+"/big/"+nextImageIndex;
    let prevImage = new Image();
    prevImage.src = location.protocol + '//' + location.host + process.env.PUBLIC_URL+"/galleries/"+this.props.currentId+"/big/"+prevImageIndex;

    return (
      <Swipeable
        onSwipedRight={this.swipedRight}
        onSwipedLeft={this.swipedLeft}
         >
        <div className="gal_nav single-full" onKeyDown={this.handleKeyPress}>
          <div className="row single-hidden">
            <div className="col-xs-12 text-center">
              <span className="gal_nav__title">
                {this.getGalleryTitle()}
              </span>
            </div>
            <div className="col-xs-2">
              {/*
              <div className="gal_nav__close pull-right">
                <Link to={'/gallery/'+this.props.currentId}>
                  <span className="gal_nav__esc">Esc</span>
                  <CrossIcon />
                </Link>
              </div>
              */}
            </div>
          </div>
          <div className="row gal_nav__secondary single-hidden">
            <div className="col-xs-6 col-sm-4">
              <Link to={'/gallery/'+this.props.currentId+'/'+this.props.currentCity} className="gal_nav__back">
                <ArrowLeft />
                <span className="gallery__back">К альбому</span>
              </Link>
            </div>
            <div className="col-xs-6 col-sm-4 col-sm-push-4">
              <span className="gal_nav__counter">
                {currentImageIndex+1}/{gallBody.length}
              </span>
            </div>
            <div className="col-xs-12 col-sm-4 col-sm-pull-4  text-center gal_nav__share">
              <span className="gal_nav__share__text">Поделиться этим фото:</span>
              <Share size={32} image={location.protocol + '//' + location.host + process.env.PUBLIC_URL+"/galleries/"+this.props.currentId+"/big/"+this.props.image}
                />
            </div>

          </div>
          <div className="row gal_nav__equal">
            <div className="col-xs-1 no-pad single-hidden">
              <Link className="gal_nav__arrow gal_nav__left" id="js-prev-image" to={'/image/'+this.props.currentId+'/'+prevImageIndex+'/'+this.props.currentCity}>
                <ArrowLeft/>
              </Link>
            </div>
            <div className="col-xs-10 gal_nav__photo single-full" onClick={this.zoom}>
              <CSSTransitionGroup
                transitionName="animation__photo"
                transitionEnterTimeout={200}
                transitionLeave={false}
                >
                <GalImage image={this.props.image} currentId={this.props.currentId} key={this.props.image}/>
              </CSSTransitionGroup>
            </div>
            <div className="col-xs-1 no-pad single-hidden">
              <Link className="gal_nav__arrow gal_nav__right" id="js-next-image" to={'/image/'+this.props.currentId+'/'+nextImageIndex+'/'+this.props.currentCity}>
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </Swipeable>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentId: state.activeGallery.activeGalleryId,
    galleryBody: state.activeGallery.body,
    galMap: state.galMap,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(mapStateToProps)(GalNav);
