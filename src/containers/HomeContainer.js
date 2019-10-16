import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/signature/signatureActions';
import {
  selectIsLoading,
  selectSignatures,
  selectTitle
} from '../store/signature/signatureSelectors';
import Home from '../pages/home';

const HomeContainer = ({ isLoading, fetchData, ...props }) => {
  const fetchDataEffect = () => fetchData();

  useEffect(fetchDataEffect, []);

  return <>{isLoading ? 'loading...' : <Home {...props} />}</>;
};

const mapStateToProps = state => {
  return {
    isLoading: selectIsLoading(state),
    signatures: selectSignatures(state),
    title: selectTitle(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(HomeContainer);
