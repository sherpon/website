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
import DragAndDrop from './dragAndDrop.jsx';
/** containers */
/** styles */
import './dragAndDrop.scss';
/** files */
/** strings */
import strings from './dragAndDrop.strings.json';

/**
 * Drag and Drop container
 */

const DragAndDropContainer = ({language}) => {
  return(
    <div className="drag-and-drop-container-section">
      <DragAndDrop
        strings={strings[language]}
      />
    </div>
  );
};

DragAndDropContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDropContainer);