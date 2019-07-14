/** libs */
import React from 'react';
import { connect } from 'react-redux';
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

const Language = ({language, handleChangeLanguage}) => {
  return(
    <div className="language-component">
      <select value={language} onChange={(event) => handleChangeLanguage(event.target.value)}>
        <option value="EN">English</option>
        <option value="ES">Español</option>
      </select>
    </div>
  );
};

export default Language;