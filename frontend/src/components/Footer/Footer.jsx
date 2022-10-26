import React from 'react';
import { Termandconditions } from '../Termandconditions';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <ul className='footer-ul'>
        <li>
          <Link to='/termsandconditions'> Terms and Conditions</Link>
        </li>
        <li>
          <a href='/help'> Help </a>
        </li>
        <li>
          <a href='/agb'> AGB </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
