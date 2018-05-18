import React from 'react';
import PropTypes from 'prop-types';

import avatar1 from './img/avatar1.png';

const PostHeader = props => (
  <div className="headerPost">
    <img className="avatar" src={avatar1} alt="avatar" />
    <span className="nameUser">{props.nameUser}</span>
    <br />
    <span className="horaPost">{props.horaPost}</span>
    <hr />
  </div>
);

PostHeader.propTypes = {
  horaPost: PropTypes.string.isRequired,
  nameUser: PropTypes.string.isRequired,
};

export default PostHeader;
