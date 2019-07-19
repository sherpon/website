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
import Cta from './cta.jsx';
/** containers */
/** styles */
import './cta.scss';
/** files */
import line1Picture from './images/line1.webp';
import line2Picture from './images/line2.webp';
import line3Picture from './images/line3.webp';
/** strings */
import strings from './cta.strings.json';

/**
 * Cta container
 */

const CtaContainer = ({language}) => {
  return(
    <div className="cta-container-section">
      <Controller>
      <Scene
        triggerHook="onLeave"
        duration={1000}
        pin
      >
        {(progress) => (
          <div className="cta-container-section__wrapper">
            <Cta strings={strings[language]} >
            <div className="cta-container-section__wrapper__perspective">
            <Timeline totalProgress={progress} paused>
              <Tween
                  to={{ opacity: 1, left: '-20%' }}
              >
                <div className="cta-container-section__wrapper__animation" style={{ opacity: 0, top: '0px', left: '-80%' }}>
                  <img src={line1Picture} alt="sherpon sign up" style={{ width: '669.15px' }}/>          
                </div>
                <div className="cta-container-section__wrapper__animation" style={{ opacity: 0, top: '111px', left: '-100%' }}>
                  <img src={line2Picture} alt="sherpon sign up" style={{ width: '839.8px', left: '-10%' }}/>            
                </div>
                <div className="cta-container-section__wrapper__animation" style={{ opacity: 0, top: '222px', left: '-90%' }}>
                  <img src={line3Picture} alt="sherpon sign up" style={{ width: '669.15px' }}/>           
                </div>
              </Tween>
            </Timeline>
            </div>
            </Cta>
          </div>
        )}
      </Scene>
      </Controller>
      
    </div>
  );
};

CtaContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CtaContainer);

/**
 * <Cta strings={strings[language]} >
        
      </Cta>
 */