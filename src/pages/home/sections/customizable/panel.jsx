/** libs */
import React from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
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

const Panel = ({
    showColorColorPicker,
    setShowColorColorPicker,
    showBackgroundColorPicker,
    setShowBackgroundColorPicker,
    stylePanel, 
    setStylePanel,
  }) => {
  return(
    <div className="panel-customizable-section">
      <div className="panel-customizable-section__title">
        Panel
      </div>
      <div className="panel-customizable-section__box">
        <div className="panel-customizable-section__box__wrapper">
          <div className="panel-customizable-section__box__input">
            <label>Color</label>
            <div className="input">
              <div className="color" style={{ backgroundColor: stylePanel.color }} onClick={ (event) => setShowColorColorPicker(true) }></div>
              <div className="color-text" onClick={ (event) => setShowColorColorPicker(true) }>
                {stylePanel.color}
              </div>
              { showColorColorPicker ? (
                  <div style={{
                      position: 'absolute',
                      zIndex: '2',
                    }}>
                    <div 
                      style={{
                        position: 'fixed',
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        left: '0px',
                      }} 
                      onClick={ (event) => setShowColorColorPicker(false) }
                    />
                    <ChromePicker 
                      disableAlpha={true}
                      color={ stylePanel.color } 
                      onChange={(color) => setStylePanel({...stylePanel, color: color.hex})} />
                  </div>
                ) : ( null ) 
              }
            </div>
          </div>
          <div className="panel-customizable-section__box__input">
            <label>Size</label>
            <div className="input">
              <select value={stylePanel.fontSize} onChange={(event) => setStylePanel({...stylePanel, fontSize: event.target.value})}>
                <option value="8px">8px</option>
                <option value="15px">15px</option>
                <option value="18px">18px</option>
                <option value="25px">25px</option>
                <option value="30px">30px</option>
                <option value="45px">45px</option>
              </select>
            </div>
          </div>
          <div className="panel-customizable-section__box__input">
            <label>Alignment</label>
            <div className="input">
              <select value={stylePanel.textAlign} onChange={(event) => setStylePanel({...stylePanel, textAlign: event.target.value})}>
                <option value="left">left</option>
                <option value="center">center</option>
                <option value="right">right</option>
              </select>
            </div>
          </div>
          <div className="panel-customizable-section__box__input">
            <label>Background</label>
            <div className="input">
              <div className="color" style={{ backgroundColor: stylePanel.backgroundColor }} onClick={ (event) => setShowBackgroundColorPicker(true) }></div>
              <div className="color-text" onClick={ (event) => setShowBackgroundColorPicker(true) }>
                {stylePanel.backgroundColor}
              </div>
              { showBackgroundColorPicker ? (
                  <div style={{
                      position: 'absolute',
                      zIndex: '2',
                    }}>
                    <div 
                      style={{
                        position: 'fixed',
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        left: '0px',
                      }} 
                      onClick={ (event) => setShowBackgroundColorPicker(false) }
                    />
                    <ChromePicker 
                      disableAlpha={true}
                      color={ stylePanel.color } 
                      onChange={(color) => setStylePanel({...stylePanel, backgroundColor: color.hex})} />
                  </div>
                ) : ( null ) 
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;