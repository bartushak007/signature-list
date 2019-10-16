import React from 'react';
import SignatureContainer from '../../../containers/SignatureContainer';

const SignatureList = ({ signatures }) => {
  const renderSignature = props => (
    <SignatureContainer key={props.id} {...props} />
  );
  return (
    <div className="signature-list">{signatures.map(renderSignature)}</div>
  );
};

export default SignatureList;
