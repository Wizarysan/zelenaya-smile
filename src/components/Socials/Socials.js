import React from 'react';
import {connect} from 'react-redux';

import './Socials.scss';

import SocVk from './../../assets/svg/Soc_vk.js'
import SocOk from './../../assets/svg/Soc_ok.js'
import SocFb from './../../assets/svg/Soc_fb.js'
import SocInst from './../../assets/svg/Soc_inst.js'
import SocYt from './../../assets/svg/Soc_yt.js'

class Socials extends React.Component {

  render() {
    this.socials = {vk: this.props.socials[this.props.city].vk,
      fb: this.props.socials[this.props.city].fb,
      ok: this.props.socials[this.props.city].ok,
      yt: this.props.socials[this.props.city].yt,
      inst: this.props.socials[this.props.city].inst
    }
    
    return (
      <div className="socials">
        {this.socials.vk &&
          <a href={`http://vk.com/${this.socials.vk}`} className="socials__link" target="_blank">
            <SocVk />
          </a>
        }
        {this.socials.ok &&
          <a href={`https://ok.ru/${this.socials.ok}`} className="socials__link" target="_blank">
            <SocOk />
          </a>
        }
        {this.socials.fb &&
          <a href={`https://www.facebook.com/${this.socials.fb}`} className="socials__link" target="_blank">
            <SocFb />
          </a>
        }
        {this.socials.inst &&
          <a href={`https://www.instagram.com/${this.socials.inst}`} className="socials__link" target="_blank">
            <SocInst />
          </a>
        }
        {this.socials.yt &&
          <a href={`https://www.youtube.com/user/${this.socials.yt}`} className="socials__link" target="_blank">
            <SocYt />
          </a>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.city,
    socials: state.socials
  };
}

export default connect(mapStateToProps)(Socials);
