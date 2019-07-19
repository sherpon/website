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
import rabbitPicture from './images/rabbit.webp';
import fieldPicture from './images/field.webp';
/** strings */

const DragAndDrop = ({
    strings,
    handleDragStart,
    handleDragOver,
    handleDrop,
  }) => {
  return(
    <div className="drag-and-drop-section">
      <div className="drag-and-drop-section__message">
        <div className="drag-and-drop-section__message__title">
          {strings.title}
        </div>
        <div className="drag-and-drop-section__message__description">
          {strings.description}
        </div>
        <div className="drag-and-drop-section__message__action">
          <div className="drag-and-drop-section__message__action__title">
            {strings.action}
          </div>
          <div className="drag-and-drop-section__message__action__rabbit">
            <img 
              draggable 
              onDragStart={handleDragStart}
              src={rabbitPicture} 
              className="rabbit-picture"
              alt={'sherpon rabbit drag and drop'}
            />
          </div>
        </div>
      </div>
      <div className="drag-and-drop-section__activity">
        <img
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          src={fieldPicture} 
          alt={'sherpon field drag and drop'}
        />
      </div>
    </div>
  );
};

export default DragAndDrop;