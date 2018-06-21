import React from 'react';
import {Link} from 'react-router';
import {Helmet} from "react-helmet";
import './Share.css';
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';
const {
  FacebookShareButton,
  TwitterShareButton,
  VKShareButton,
  OKShareButton,
} = ShareButtons;
const {
  FacebookShareCount,
  VKShareCount,
  OKShareCount,
} = ShareCounts;
const VKIcon = generateShareIcon('vk');
const FacebookIcon = generateShareIcon('facebook');
const OKIcon = generateShareIcon('ok');
const TwitterIcon = generateShareIcon('twitter');

class Share extends React.Component {
  render() {
    let shareUrl = window.location.href;
    let shareImg = this.props.image;

    //TODO refactor shareCount to one function
    return (
      <div className="share">
        <Helmet>
          <meta property="og:type" content="article" />
          <meta property="og:url" content={shareUrl} />
          <meta property="og:image" content={shareImg} />
        </Helmet>
        <VKShareButton style={{backgroundColor:'#45668e'}} className="share__button"
          url={shareUrl} title={`Улыбнись :) - Зелёная Точка. ${document.title}`}
          image={shareImg}>
          <VKIcon className="share__icon" size={this.props.size}  />
          <VKShareCount url={shareUrl}>
            {shareCount => {
              if (shareCount>0) return <span className="share__count">{shareCount}</span>
            }}
          </VKShareCount>
        </VKShareButton>
        <FacebookShareButton style={{backgroundColor:'#3b5998'}}  className="share__button"
          url={shareUrl} quote={`Улыбнись :) - Зелёная Точка. ${document.title}`}>
          <FacebookIcon className="share__icon" size={this.props.size}  />
          <FacebookShareCount url={shareUrl}>
            {shareCount => {
              if (shareCount>0) return <span className="share__count">{shareCount}</span>
            }}
          </FacebookShareCount>
        </FacebookShareButton>
        <OKShareButton style={{backgroundColor:'#f2720c'}} className="share__button"
          url={shareUrl} title={`Улыбнись :) - Зелёная Точка. ${document.title}`}
          picture={shareImg}>
          <OKIcon className="share__icon" size={this.props.size}  />
          <OKShareCount url={shareUrl}>
            {shareCount => {
              if (shareCount>0) return <span className="share__count">{shareCount}</span>
            }}
          </OKShareCount>
        </OKShareButton>
        <TwitterShareButton className="share__button"
          url={shareUrl} title={`Улыбнись :) - Зелёная Точка. ${document.title}`}>
          <TwitterIcon className="share__icon" size={this.props.size}  />
        </TwitterShareButton>
      </div>
    );
  }
}

export default Share;
