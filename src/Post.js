import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader />
    <p>{props.textPost}</p>
  </div>
);

Post.propTypes = {
  textPost: PropTypes.string.isRequired,
};

export default Post;
