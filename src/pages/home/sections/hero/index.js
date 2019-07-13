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
import editorPicture from './images/editor-transparent.png';
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
    return(
      <div className="hero-container-section">
        <Controller>
          <Scene
            triggerHook="onLeave"
            duration={2500}
            pin={'#hero-section'}
            pinSettings={true}
          >
            {(progress) => (
              <Hero>
                <Timeline 
                  totalProgress={progress} 
                  paused
                  target={
                    <div className="animation__editor">
                      <img src={editorPicture}/>
                      <Timeline totalProgress={progress} paused>
                        <Tween
                            from={{ left: '10%', top: '60%' }}
                            to={{ left: '60%', top: '10%' }}
                        >
                          <div className="animation">
                            holiiiiiiii              
                          </div>
                        </Tween>
                      </Timeline>
                    </div>
                  }
                >
                  <Tween
                    duration={5}
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
    );
  }
}

HeroContainer.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer);