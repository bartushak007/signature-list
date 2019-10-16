import React from 'react';
import { connect } from 'react-redux';
import {} from '../store/signature/signatureActions';
import {} from '../store/signature/signatureSelectors';
import Signature from '../components/blocks/signature';

const SignatureContainer = props => {
  return <Signature {...props} />;
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(SignatureContainer);
