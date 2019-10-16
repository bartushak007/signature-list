import React from 'react';
import Image from '../../shared/image';
import Icon from '../../shared/icon';

const Signature = ({
  src,
  alt,
  sent,
  installed,
  edited,
  url,
  id,
  deleteSignature
}) => {
  console.log(deleteSignature);
  return (
    <div className={`signature ${alt}`}>
      <Image {...{ alt, src }} />
      <div className={`signature__hidden-info`}>
        <div>
          <input className="signature__checkbox" type="checkbox" id={id} />
          <label className="signature__checkbox-custom" htmlFor={id} />
        </div>
        <div className="signature__info-and-controls">
          <div>
            <div>
              <span className="signature__title">Sent by admin: </span>
              <span className="signature__data">{sent}</span>
            </div>
            <div>
              <span className="signature__title">Installed by user: </span>
              <span className="signature__data">{installed}</span>
            </div>
            <div>
              <span className="signature__title">Last edited: </span>
              <span className="signature__data">{edited}</span>
            </div>
          </div>
          <div className="signature__controls">
            <a className="signature__use-url" href={url}>
              Use
            </a>
            <div className="signature__btn-list">
              <Icon className="signature__btn" icon="pencil">
                45
              </Icon>
              <Icon className="signature__btn" icon="eye">
                45
              </Icon>
              <span onClick={deleteSignature}>
                <Icon className="signature__btn" icon="trash">
                  45
                </Icon>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signature;
