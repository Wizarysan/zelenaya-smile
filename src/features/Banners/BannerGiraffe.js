import React from 'react';

//TODO выделить пути features в отдельный файл с константами

import giraffeBody from './../../assets/images/banners/giraffe-body.png';
import giraffeHead from './../../assets/images/banners/giraffe-head.png';
import giraffeWeb from './../../assets/images/banners/giraffe-web.png';
import giraffeTv from './../../assets/images/banners/giraffe-tv.png';
import giraffeMediac from './../../assets/images/banners/giraffe-mediac.png';
import giraffePlay from './../../assets/images/banners/giraffe-play.png';
import './BannerGiraffe.css';

//TODO выбор города для линка в баннере

const BannerGiraffe = (props) => {
  return(
    <div className="giraffe back-greygrad">
      <a href={`http://${props.cityGW}.zelenaya.net/mixer/`} >
        <div className="giraffe__wrapper">
          <div className="giraffe__title">
            <span>интернет и тв</span>
            <div className="giraffe__title-big">ОГРОМНЫХ</div>
            <span>возможностей</span>
          </div>
          <div className="giraffe__body">
            <img src={giraffeBody} className="giraffe__body-img"/>
          </div>
          <div className="giraffe__options">
            <div className="giraffe__option">
              <img src={giraffeWeb} className="giraffe__option-img"/>
              <div>Интернет<br/> тарифы до<br/> 100 Мбит/с</div>
            </div>
            <div className="giraffe__option">
              <img src={giraffeTv} className="giraffe__option-img"/>
              <div>Цифровое ТВ<br/>более 250<br/> каналов</div>
            </div>
            <br className="giraffe__options-divider"/>
            <div className="giraffe__option">
              <img src={giraffePlay} className="giraffe__option-img"/>
              <div>Бесплатное<br/> управление<br/> ТВ-эфиром</div>
            </div>
            <div className="giraffe__option">
              <img src={giraffeMediac} className="giraffe__option-img"/>
              <div>Бесплатный<br/> медиацентр<br/>в комплекте</div>
            </div>
          </div>
          <img src={giraffeHead} className="giraffe__head"/>
        </div>
      </a>
    </div>
  )
}

export default BannerGiraffe;
