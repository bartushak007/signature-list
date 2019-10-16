import React from 'react';
import Icon from '../../shared/icon';

const TopMenu = ({
  title,
  willBeDeleted,
  hasRemovedSignatures,
  deleteRemovalSignatures
}) => {
  return (
    <div className="top-menu">
      {!hasRemovedSignatures ? (
        <div className="top-menu__create">
          <h2 className="top-menu__title">{title}</h2>
          <button className="top-menu__btn">Create a signature</button>
        </div>
      ) : (
        <div className="top-menu__delete">
          <span className="top-menu__selected-tile">
            Selected ({willBeDeleted}) <Icon icon="cross" />
          </span>
          <button
            className="top-menu__delete-btn"
            onClick={deleteRemovalSignatures}
          >
            Delete <Icon icon="trash" /> ({willBeDeleted})
          </button>
        </div>
      )}
    </div>
  );
};

export default TopMenu;
