import React, { Fragment } from 'react';
import Header from './Header';
import Post from './Post';

import './style.scss';
import avatar1 from './assets/img/avatar1.png';
import avatar2 from './assets/img/avatar2.png';
import avatar3 from './assets/img/avatar3.png';

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
    hourPost: 'há 28 min',
    avatar: avatar3,
  },
];

const App = () => (
  <Fragment>
    <Header />
    <div className="wrapperPost">{post.map(p => <Post key={p.id} post={p} />)}</div>
  </Fragment>
);

export default App;
