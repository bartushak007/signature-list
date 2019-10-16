import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrash, faEye } from '@fortawesome/free-solid-svg-icons';

const icons = {
  pencil: faPencilAlt,
  trash: faTrash,
  eye: faEye
};

const Icon = ({ icon, fontSize, ...props }) => {
  return <FontAwesomeIcon {...props} icon={icons[icon]}></FontAwesomeIcon>;
};

Icon.defaultProps = {
  icon: ''
};

Icon.propTypes = {
  icon: PropTypes.string
};

export default Icon;
