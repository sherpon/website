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
/** strings */

const Cta = ({children, strings}) => {
  return(
    <div id="cta-section" className="cta-section">
      <div className="cta-section__message">
        <div className="cta-section__message__title">
          {strings.title}
        </div>
        <div className="cta-section__message__description">
          <div className="cta-button-container">
            <a href={process.env.ADMIN_URL_ENDPOINT}>
            <div className="cta-button">
              {strings.button}
            </div>
            </a>
          </div>
        </div>
      </div>
      <div id="cta-section__action" className="cta-section__action">
        {children}
      </div>
    </div>
  );
};

export default Cta;