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
import Hero from './hero.jsx';
/** containers */
/** styles */
import './hero.scss';
/** files */
/** strings */
import strings from './hero.strings.json';

/**
 * Hero container
 */

class HeroContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="hero-container-section">
        <Hero/>
      </div>
    );
  }
}

HeroContainer.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HeroContainer);