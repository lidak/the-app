import React from 'react';
import PropTypes from 'prop-types';

import './style.styl';

const Button = ({ className, children, onClick }) => (
  <button className={`button ${className}`} onClick={onClick}>{children}</button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
