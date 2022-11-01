import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import comingsoon from './commingsoon.gif';
import './pages.scss';

const Help = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className='pageContainer'>
        <img src={comingsoon} />
      </div>
    </>
  );
};

export default Help;
