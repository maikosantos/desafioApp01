import React from 'react';
import PropTypes from 'prop-types';

import avatar1 from './img/avatar1.png';

const HeaderPost = props => (
  <div className="headerPost">
    <img className="avatar" src={avatar1} alt="avatar" />
    <span className="nameUser">Nome do camarada</span>
    <br />
    <span className="horaPost">hora</span>
  </div>
);

export default HeaderPost;
