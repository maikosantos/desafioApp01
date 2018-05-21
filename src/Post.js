import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

import './style.scss';

const Post = props => (
  <div className="post">
    <PostHeader
      avatar={props.post.avatar}
      nameUser={props.post.nameUser}
      hourPost={props.post.hourPost}
    />
    <p>{props.post.textPost}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    avatar: PropTypes.object,
    textPost: PropTypes.string,
    nameUser: PropTypes.string,
    hourPost: PropTypes.string,
  }).isRequired,
};

export default Post;
