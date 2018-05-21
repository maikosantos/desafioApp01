import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

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
  avatar: PropTypes.isRequired,
  nameUser: PropTypes.string.isRequired,
  hourPost: PropTypes.string.isRequired,
};

export default PostHeader;
