import React from 'react';
import { Termandconditions } from '../Termandconditions';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer>
      <ul className='footer-ul'>
        <li>
          <Link to='/termsandconditions'> Terms and Conditions</Link>
        </li>
        <li>
          <a href='#'> Help </a>
        </li>
        <li>
          <a href='#'> AGB </a>
        </li>
      </ul>
    </footer>
  );
};
