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
import Code from './code.jsx';
/** containers */
/** styles */
import './code.scss';
/** files */
/** strings */
import strings from './code.strings.json';

/**
 * Code container
 */

const CodeContainer = ({language}) => {
  return(
    <div className="code-container-section">
      <Code
        strings={strings[language]}
      />
    </div>
  );
};

CodeContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CodeContainer);