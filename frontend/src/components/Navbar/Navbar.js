import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Header,
  HeaderName,
  HeaderGlobalAction,
  HeaderGlobalBar,
  Theme,
  Link,
} from '@carbon/react';
import { Search, Notification, Logout, Clean } from '@carbon/icons-react';

const Navbar = () => {
  const navigate = useNavigate();

  const Logoutuser = async () => {
    try {
      await axios.delete('http://localhost:5000/logout');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/** 
    <nav
      className='navbar is-light'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='container'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='https://bulma.io'>
            <img
              src='https://bulma.io/images/bulma-logo.png'
              width='112'
              height='28'
              alt='logo'
            />
          </a>

          <a
            href='/'
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasicExample'
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>

        <div id='navbarBasicExample' className='navbar-menu'>
          <div className='navbar-start'>
            <a href='/' className='navbar-item'>
              Home
            </a>
          </div>

          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <button onClick={Logout} className='button is-light'>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>





*/}
      <Theme theme='g100'>
        <Header aria-label='Cleaning App' className='header--styling'>
          <Link className='btn--mar-right' to='/'>
            <HeaderName href='/' prefix=''>
              <Clean size={30} />
            </HeaderName>
          </Link>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label='Search'>
              <Search size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label='Notifications'>
              <Notification size={20} />
            </HeaderGlobalAction>
            <HeaderGlobalAction aria-label='Logout'>
              <button onClick={Logoutuser} className='logout-btn'>
                <Logout size={20}></Logout>
              </button>
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      </Theme>
    </>
  );
};

export default Navbar;
