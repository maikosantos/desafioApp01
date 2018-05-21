import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import avatar1 from './img/avatar1.png';

const PostHeader = props => (
  <div className="headerPost">
    <img className="avatar" src={props.avatar} alt="avatar" />
    <span className="nameUser"> {props.nameUser} </span>
    <br />
    <span className="horaPost"> {props.hourPost} </span>
    <hr />
  </div>
);

PostHeader.propTypes = {
  avatar: PropTypes.object.isRequired,
  nameUser: PropTypes.string.isRequired,
  hourPost: PropTypes.string.isRequired,
};

export default PostHeader;
