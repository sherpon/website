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
import Customizable from './customizable.jsx';
import Panel from './panel.jsx';
/** containers */
/** styles */
import './customizable.scss';
/** files */
/** strings */
import strings from './customizable.strings.json';

/**
 * Customizable container
 */

const CustomizableContainer = ({language}) => {
  // const [color, setColor] = useState('#4D4D4D');
  // const [fontSize, setFontSize] = useState('#25px');
  // const [textAlign, setTextAlign] = useState('#left');
  // const [backgroundColor, setBackgroundColor] = useState('#F473B3');

  const [showColorColorPicker, setShowColorColorPicker] = useState(false);
  const [showBackgroundColorPicker, setShowBackgroundColorPicker] = useState(false);
  const [stylePanel, setStylePanel] = useState({
                                              color: '#4D4D4D',
                                              fontSize: '25px',
                                              textAlign: 'left',
                                              backgroundColor: '#F473B3',
                                            });

  return(
    <div className="customizable-container-section">
      <Customizable
        strings={strings[language]}
        stylePanel={stylePanel}
      >
        <Panel
          showColorColorPicker={showColorColorPicker}
          setShowColorColorPicker={setShowColorColorPicker}
          showBackgroundColorPicker={showBackgroundColorPicker}
          setShowBackgroundColorPicker={setShowBackgroundColorPicker}
          stylePanel={stylePanel}
          setStylePanel={setStylePanel}
        />
      </Customizable>
    </div>
  );
};

CustomizableContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CustomizableContainer);