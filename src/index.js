import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
  posts = {
    textPost: 'texto do post 1',
    hourPost: 'há 14 min',
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Post textPost={this.posts.textPost} hourPost={this.posts.hourPost} />
      </Fragment>
    );
  }
}

// https://reactjs.org/docs/lists-and-keys.html
// https://codepen.io/maikosantos/pen/deQJoj?editors=0010

render(<App />, document.getElementById('app'));
