import React from 'react';
import { connect } from 'react-redux';
import {} from '../store/signature/signatureActions';
import { selectSignatures } from '../store/signature/signatureSelectors';
import SignatureList from '../components/sections/signatureList';

const SignatureListContainer = props => {
  return <SignatureList {...props} />;
};

const mapStateToProps = state => {
  return { signatures: selectSignatures(state) };
};

export default connect(
  mapStateToProps,
  {}
)(SignatureListContainer);
