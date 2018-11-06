import React from 'react';

//TODO выделить пути features в отдельный файл с константами

import giraffeWhole from './../../assets/images/banners/giraffe-whole.png';
import giraffeWeb from './../../assets/images/banners/giraffe-web.png';
import giraffeTv from './../../assets/images/banners/giraffe-tv.png';
import giraffeMediac from './../../assets/images/banners/giraffe-mediac.png';
import giraffePlay from './../../assets/images/banners/giraffe-play.png';
import './BannerGiraffe.scss';

//TODO выбор города для линка в баннере

const BannerGiraffeVertical = (props) => {
  return(
    <div className="giraffe-v">
      <div className="giraffe back-greygrad">
        <a href="http://stavropol.zelenaya.net/mixer/" >
          <div className="giraffe__wrapper">
            <div className="giraffe__title">
              <span>интернет и тв</span>
              <div className="giraffe__title-big">ОГРОМНЫХ</div>
              <span>возможностей</span>
            </div>
            <div className="giraffe__whole">
              <img src={giraffeWhole} className="giraffe__whole-img"/>
            </div>
            <div className="giraffe__options">
              <div className="giraffe__option">
                <img src={giraffeWeb} className="giraffe__option-img"/>
                <div>Интернет<br className="giraffe__option-br"/> тарифы до<br className="giraffe__option-br"/> 100 Мбит/с</div>
              </div>
              <div className="giraffe__option">
                <img src={giraffeTv} className="giraffe__option-img"/>
                <div>Цифровое ТВ<br className="giraffe__option-br"/> более 250<br className="giraffe__option-br"/> каналов</div>
              </div>
              <br className="giraffe__options-divider"/>
              <div className="giraffe__option">
                <img src={giraffePlay} className="giraffe__option-img"/>
                <div>Бесплатное<br className="giraffe__option-br"/> управление<br className="giraffe__option-br"/> ТВ-эфиром</div>
              </div>
              <div className="giraffe__option">
                <img src={giraffeMediac} className="giraffe__option-img"/>
                <div>Бесплатный<br className="giraffe__option-br"/> медиацентр <br className="giraffe__option-br"/>в комплекте</div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default BannerGiraffeVertical;
