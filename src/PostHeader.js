import React, { Component } from 'react';
import PropTypes from 'prop-types';

import avatar1 from './img/avatar1.png';

const PostHeader = props => (
  <div className="headerPost">
    <img className="avatar" src={avatar1} alt="avatar" />
    <span className="nameUser">{props.nameUser}</span>
    <br />
    <span className="horaPost">{props.hourPost}</span>
    <hr />
    {props.children}
  </div>
);

PostHeader.propTypes = {
  hourPost: PropTypes.string.isRequired,
  nameUser: PropTypes.string.isRequired,
};

export default PostHeader;
