/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Hero from './hero.jsx';
/** containers */
/** styles */
import './hero.scss';
/** files */
import airportNightPicture from './images/airport-night-opt.webp';
import ideaComPicture from './images/idea.com.svg';
import yourPicture from './images/YOUR.svg';
import ideaPicture from './images/IDEA.svg';
import takeOffPicture from './images/TAKE_OFF.svg';
import herePicture from './images/HERE.svg';
import buttonPicture from './images/button.svg';
/** strings */
import strings from './hero.strings.json';

/**
 * Hero container
 */

class HeroContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {language} = this.props;
    return(
      <div className="hero-container-section">
        <div id="hero-container-section-controller" className="hero-container-section-controller">
          <div id="hero-container-section_scene" className="hero-container-section_scene">
            <Controller>
              <Scene
                triggerHook="onLeave"
                duration={2000}
                pin={'#hero-container-section_scene'}
              >
                {(progress) => (
                  <Hero
                    strings={strings[language]}
                  >
                    <Timeline 
                      totalProgress={progress} 
                      paused
                      target={
                        <div className="animation__editor">
                          <div className="animation__editor__wrapper">
                            <Timeline totalProgress={progress} paused>
                              <Tween
                                  from={{ opacity: 0, right: '-110%' }}
                                  to={{ opacity: 1, right: '0%' }}
                              >
                                <img src={airportNightPicture} alt="sherpon-airport-night" style={{ width: '100%' }}/>
                              </Tween>
                              <Tween
                                  from={{ opacity: 0, top: '-60%' }}
                                  to={{ opacity: 1, top: '51%' }}
                              >
                                <img src={herePicture} alt="sherpon-picture-here" style={{ width: '12.5%', marginLeft: '11%' }}/>
                              </Tween>
                              <Tween
                                  from={{ opacity: 0, top: '-60%' }}
                                  to={{ opacity: 1, top: '44%' }}
                              >
                                <img src={takeOffPicture} alt="sherpon-picture-take-off" style={{ width: '23.5%', marginLeft: '11%' }}/>
                              </Tween>
                              <Tween
                                  from={{ opacity: 0, top: '-60%' }}
                                  to={{ opacity: 1, top: '36.5%' }}
                              >
                                <img src={ideaPicture} alt="sherpon-picture-idea" style={{ width: '12%', marginLeft: '11%' }}/>
                              </Tween>
                              <Tween
                                  from={{ opacity: 0, top: '-60%' }}
                                  to={{ opacity: 1, top: '29.6348%' }}
                              >
                                <img src={yourPicture} alt="sherpon-picture-your" style={{ width: '15%', marginLeft: '10.5%' }}/>
                              </Tween>
                              <Tween
                                  from={{ opacity: 0, top: '-60%' }}
                                  to={{ opacity: 1, top: '6.6348%' }}
                              >
                                <img src={ideaComPicture} alt="sherpon-picture-logo" style={{ width: '15%', marginLeft: '10.5%' }}/>
                              </Tween>
                              <Tween
                                  from={{ opacity: 0, top: '160%' }}
                                  to={{ opacity: 1, top: '62.6348%' }}
                              >
                                <img src={buttonPicture} alt="sherpon-picture-button" style={{ width: '29.5%', marginLeft: '10.5%' }}/>
                              </Tween>
                            </Timeline>
                          </div>
                        </div>
                      }
                    >
                      <Tween
                        duration={7}
                      />
                      <Tween
                        to={{css: { transform: 'rotateY(0deg) rotateX(0deg)' }}}
                      />
                    </Timeline>
                  </Hero>
                )}
              </Scene>
            </Controller>
          </div>
        </div>
      </div>
    );
  }
}

HeroContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer);