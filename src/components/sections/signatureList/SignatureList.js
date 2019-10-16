import React from 'react';
import Signature from '../../blocks/signature';

const SignatureList = ({ signatures }) => {
  const renderSignature = props => <Signature key={props.id} {...props} />;
  return (
    <div className="signature-list">{signatures.map(renderSignature)}</div>
  );
};

export default SignatureList;
