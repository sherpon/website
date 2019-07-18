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
            <Timeline totalProgress={progress} paused>
              <Tween
                  from={{ x: '10%', top: '60%' }}
                  to={{ x: '60%', top: '10%' }}
              >
                <div className="cta-container-section__wrapper__animation">
                  holi            
                </div>
              </Tween>
            </Timeline>
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