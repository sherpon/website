/** libs */
import React, { useState } from 'react';
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
import checkPicture from './images/check.svg';
/** strings */
import strings from './dragAndDrop.strings.json';

const CheckOverlay = ({strings, checked}) => {
  const isChecked = (checked) ? ('checked') : ('');
  return(
    <div className={`check-overlay ${isChecked}`}>
      <img className="check-overlay__check" src={checkPicture}/>
      <div className="check-overlay__message">
        {'See? It’s easy, right!'}
      </div>
    </div>
  );
};

function handleDragStart(ev) {
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData("application/my-app", ev.target.id);
  ev.dataTransfer.dropEffect = "move";
}

function handleDragOver(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move"
}

/**
 * Drag and Drop container
 */

const DragAndDropContainer = ({language}) => {
  const [checked, setCheck] = useState(false);

  function handleDrop(ev) {
    ev.preventDefault();
    setCheck(true);
    console.log('droped!');
  }

  return(
    <div className="drag-and-drop-container-section">
      <DragAndDrop
        strings={strings[language]}
        checked={checked}
        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDrop={handleDrop}
      />
      <CheckOverlay
        strings={strings[language]}
        checked={checked}
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