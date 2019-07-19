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

const Hero = ({children, strings}) => {
  return(
    <div id="hero-section" className="hero-section">
      <div className="hero-section__hero">
        <div className="hero-section__hero__logo">
          <img src={isotype} alt='Sherpon logo'/>
          <div>Sherpon</div>
        </div>
        <div className="hero-section__hero__title">
          {strings.titleLabel}
        </div>
        <div className="hero-section__hero__description">
          {strings.descriptionLabel}
        </div>
        <div className="hero-section__hero__action">
          <div className="hero-button-container">
            <a href={process.env.ADMIN_URL_ENDPOINT}>
            <div className="hero-button">
              {strings.signupButton}
            </div>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-section__animation">
        {children}
      </div>
    </div>
  );
};

export default Hero;