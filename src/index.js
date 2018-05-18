import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
  posts = [
    {
      textPost: 'texto do post 1',
      horaPost: 'há 14 min',
    },
    {
      textPost: 'texto do post 2',
      horaPost: 'há 17 min',
    },
  ];

  render() {
    return (
      <Fragment>
        <Header />
        <Post posts={this.posts} />
      </Fragment>
    );
  }
}

// https://reactjs.org/docs/lists-and-keys.html
// https://codepen.io/maikosantos/pen/deQJoj?editors=0010

render(<App />, document.getElementById('app'));
