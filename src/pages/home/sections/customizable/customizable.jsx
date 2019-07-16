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

const Customizable = ({children, strings, stylePanel}) => {
  return(
    <div 
      className="customizable-section" 
      style={{ 
        color: stylePanel.color,
        fontSize: stylePanel.fontSize,
        textAlign: stylePanel.textAlign, 
        backgroundColor: stylePanel.backgroundColor,
      }}
    >
      <div className="customizable-section__message">
        <div className="customizable-section__message__title">
          {strings.title}
        </div>
        <div className="customizable-section__message__description">
          {strings.description}
        </div>
        <div className="customizable-section__message__action">
          {strings.action}
        </div>
      </div>
      <div className="customizable-section__action">
        {children}
      </div>
    </div>
  );
};

export default Customizable;