/** libs */
import React from 'react';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
/** containers */
/** styles */
/** files */
import isotype from './images/isotype-outwhite.svg';
/** strings */

const Hero = ({}) => {
  return(
    <div className="hero-section">
      <div className="hero-section__hero">
        <div className="hero-section__hero__logo">
          <img src={isotype}/>
          <div>Sherpon</div>
        </div>
        <div className="hero-section__hero__title">
          Create your awesome website now
        </div>
        <div className="hero-section__hero__description">
          Sherpon is a modern platform made to make easy the way to create a website
        </div>
        <div className="hero-section__hero__action">
          <div className="hero-button-container">
            <div className="hero-button">
              Sign up now
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section__animation"></div>
    </div>
  );
};

export default Hero;