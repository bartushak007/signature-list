import React from 'react';
import { connect } from 'react-redux';
import { deleteRemovalSignatures } from '../store/signature/signatureActions';
import {
  selectTitle,
  selectWillBeDeleted,
  selectHasRemovedSignatures
} from '../store/signature/signatureSelectors';
import TopMenu from '../components/sections/topMenu';

const TopMenuContainer = props => {
  return <TopMenu {...props} />;
};

const mapStateToProps = state => {
  return {
    title: selectTitle(state),
    willBeDeleted: selectWillBeDeleted(state),
    hasRemovedSignatures: selectHasRemovedSignatures(state)
  };
};

export default connect(
  mapStateToProps,
  { deleteRemovalSignatures }
)(TopMenuContainer);
