/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** constants */
/** actions */
import { handleChangeLanguage } from './language.actions.js';
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Language from './language.jsx';
/** containers */
/** styles */
import './language.scss';
/** files */
/** strings */
import strings from './language.strings.json';

/**
 * Language container
 */

const LanguageContainer = ({language, handleChangeLanguage}) => {
  return(
    <div className="language-container-component">
      <Language
        language={language}
        handleChangeLanguage={handleChangeLanguage}
      />
    </div>
  );
};

LanguageContainer.propTypes = {
  language: PropTypes.string.isRequired,
  handleChangeLanguage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeLanguage: (language) => dispatch(handleChangeLanguage(language)),
});

 export default connect(mapStateToProps, mapDispatchToProps)(LanguageContainer);