import React from 'react';
import TitleScreenShot from '../TitleScreenShot.png';
import ScreenShot from '../pygame-screenshot.png';

export default class SpaceGame extends React.Component {

  state = {
    moreInfo: true
  }

  showHide() {
    this.setState({
      moreInfo: !this.state.moreInfo
    })
  }

  render() {
    const moreInfo = this.state.moreInfo;
    return (
      <div className="row project-right">
        <div className="col-6 pic-container">
          <a
            href="https://github.com/rupp-colin/definitely_not_galaga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TitleScreenShot} alt="title screen for game"></img>
          </a>
          <a
            href="https://github.com/rupp-colin/definitely_not_galaga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ScreenShot} alt="screen shot of Definitely Not Galaga"></img>
          </a>
        </div>
        <div className="col-6">
          <h2 className="project-title">Definitely Not Galaga</h2>
          <p className="project-desc">"Definitely Not Galaga" is just what it sounds like.  It is
            NOT the retro arcade game Galaga.  It IS, however,
            a proof of concept game that resembles the old arcade
            space shooters that I grew up playing.  This project started as
            a challenge to myself to build something in a week using a
            language I had previously not learned. Four days later, "Definitely
            Not Galaga" was born after studying a bit of python and familiarizing
            myself with the python arcade library.
          </p>
          {!moreInfo && <p className="more" onClick={() => this.showHide()}>more >>></p>}
          {moreInfo === true && <TechList hide={() => this.showHide()}/>}
        </div>
      </div>
    )
  }
  }

  function TechList(props) {
    return (
      <div>
        <ul className="col-12">
          <li className="tech-icon">
            <i className="devicon-python-plain"></i>
          </li>
        </ul>
        <p className="less" onClick={() => props.hide()}>less {"<<<"}</p>
      </div>
    )
  }
