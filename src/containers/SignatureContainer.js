import React from 'react';
import { connect } from 'react-redux';
import {
  deleteSignature,
  addRemovalSignatureId,
  removeRemovalSignatureId
} from '../store/signature/signatureActions';
import { selectHasRemovedSignatures } from '../store/signature/signatureSelectors';
import Signature from '../components/blocks/signature';

const SignatureContainer = props => {
  return <Signature {...props} />;
};

const mapStateToProps = (state, props) => {
  return { ...props, hasRemovedSignatures: selectHasRemovedSignatures(state) };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteSignature: () => {
      dispatch(deleteSignature(ownProps.id));
    },
    addRemovalSignatureId: () => {
      dispatch(addRemovalSignatureId(ownProps.id));
    },
    removeRemovalSignatureId: () => {
      dispatch(removeRemovalSignatureId(ownProps.id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignatureContainer);
