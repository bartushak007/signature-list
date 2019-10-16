import React from 'react';
import { connect } from 'react-redux';
import { deleteSignature } from '../store/signature/signatureActions';
import {} from '../store/signature/signatureSelectors';
import Signature from '../components/blocks/signature';

const SignatureContainer = props => {
  return <Signature {...props} />;
};

const mapStateToProps = (state, props) => {
  return { ...props, ...state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteSignature: () => {
      dispatch(deleteSignature(ownProps.id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignatureContainer);
