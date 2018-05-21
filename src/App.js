import React, { Component, Fragment } from 'react';
import Header from './Header';
import Post from './Post';

import './style.scss';
import avatar1 from './img/avatar1.png';
import avatar2 from './img/avatar2.png';
import avatar3 from './img/avatar3.png';

const post = [
  {
    id: 1,
    textPost: 'texto do post 1',
    nameUser: 'Maiko Silva',
    hourPost: 'há 03 min',
    avatar: avatar1,
  },
  {
    id: 2,
    textPost: 'texto do post 2',
    nameUser: 'Maiko Santos',
    hourPost: 'há 14 min',
    avatar: avatar2,
  },
  {
    id: 3,
    textPost: 'texto do post 3',
    nameUser: 'Maiko Santos Silva',
    hourPost: 'há 27 min',
    avatar: avatar3,
  },
];

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {post.map(p => <Post key={p.id} post={p} />)}
      </Fragment>
    );
  }
}
