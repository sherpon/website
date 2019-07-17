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
import codePicture from './images/code-2x.webp';
/** strings */

const Code = ({strings}) => {
  return(
    <div className="code-section">
      <div className="code-section__message">
        <div className="code-section__message__title">
          {strings.title}
        </div>
        <div className="code-section__message__description">
          {strings.description}
        </div>
      </div>
      <div className="code-section__action">
        <img src={codePicture} alt="sherpon code"/>
      </div>
    </div>
  );
};

export default Code;