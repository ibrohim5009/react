import React from 'react';
import Category from '../category/Category';
import Icon from '../icon/Icon';
import {catagory, icon, logo} from './data';
import Logo from './Logo';
import '../navbar/style.css';

function Navbar () {
  return (
    <div className="Navbar">
      <Category catagory={catagory} />
      <Icon icon={icon} />
      <Logo logo={logo} />

    </div>
  );
}

export default Navbar;
