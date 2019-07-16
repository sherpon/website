/** libs */
import React, { Suspense } from 'react';
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
import Hero from './sections/hero';
const DragAndDrop = React.lazy(() => import( /* webpackChunkName: "drag-and-drop-section" */ './sections/dragAndDrop'));
const Customizable = React.lazy(() => import( /* webpackChunkName: "customizable-section" */ './sections/customizable'));
/** styles */
/** files */
/** strings */

const SpinnerPage = () => {
  return(
    <div>loading</div>
  );
};

/**
 * Home container
 */

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="home-container-page">
        <Hero/>
        <Suspense fallback={<SpinnerPage/>}>
          <DragAndDrop/>
          <Customizable/>
        </Suspense>
      </div>
    );
  }
}

HomeContainer.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);