import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader horaPost={Post.props.horaPost} />
    <p>{props.textPost}</p>
  </div>
);

Post.propTypes = {
  textPost: PropTypes.string.isRequired,
};

export default Post;
