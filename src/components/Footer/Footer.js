import React from 'react';
import LogoMain from './../../assets/svg/Logo_main';
import Socials from './../../components/Socials/Socials';
import './Footer.scss';

const Footer = (props) => {
  return(
    <div className="footer">
      <div className="footer__copyright"><span>© 2008-2017  ГК «Зеленая точка»</span></div>
        <div className="row footer__mobile">
          <div className="col-xs-6 no-pad">
            <a href='http://zelenaya.net' className="nav_top__tooltip" target="_blank">
              <LogoMain />
              <span className="nav_top__tooltip-text vertical-center">на сайт <span className="green-text">zelenaya.net</span></span>
            </a>
          </div>
          <div className="col-xs-6 no-pad">
              <Socials />
          </div>
        </div>
    </div>
  )
}

export default Footer;
