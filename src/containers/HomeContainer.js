import React from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/signature/signatureActions';
import { selectIsLoading } from '../store/signature/signatureSelectors';
import Home from '../pages/home';

const HomeContainer = props => {
  return <Home {...props} />;
};

const mapStateToProps = state => {
  return {
    isLoading: selectIsLoading(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(HomeContainer);
