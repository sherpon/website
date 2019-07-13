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
            duration={1001}
            pin={'#hero-section'}
            pinSettings={true}
          >
            {(progress) => (
              <Hero>
                <Timeline totalProgress={progress} paused>
                  <Tween
                      from={{ left: '10%', top: '60%' }}
                      to={{ left: '60%', top: '10%' }}
                  >
                    <div className="animation">
                      holiiiiiiii              
                    </div>
                  </Tween>
                  <Timeline 
                    target={
                      <div className="heading">
                        <h2>This is a cool heading</h2>
                      </div>
                    }
                  >
                    <Tween
                      from={{ opacity: 0 }}
                      to={{ opacity: 1 }}
                    />
                    <Tween
                      to={{ x: '110%' }}
                    />
                  </Timeline>
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