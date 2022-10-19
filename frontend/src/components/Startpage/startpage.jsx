import React from 'react';

import startpageHeader from './startpageHeader';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
  HeaderMenu,
} from '@carbon/react';
import About from '../page/About';
import { Link } from 'react-router-dom';
import { Login, Logout } from '@carbon/icons-react';
import LandingPage from './LandingPage';

const Startpage = () => (
  <>
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label='Carbon Tutorial'>
          <SkipToContent />
          <HeaderMenuButton
            aria-label='Open menu'
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href='/' prefix='OR'>
            Quiz
          </HeaderName>
          <HeaderNavigation aria-label='Carbon Tutorial'></HeaderNavigation>

          <HeaderNavigation aria-label='IBM [Platform]'>
            {/* <HeaderMenuItem href='/login'>Login</HeaderMenuItem> */}
            <HeaderMenuItem href='/about'>About</HeaderMenuItem>
            {/* <HeaderMenu aria-label='Link 4' menuLinkName='Link 4'>
              <HeaderMenuItem href='#'>Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href='#'>Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href='#'>Sub-link 3</HeaderMenuItem>
            </HeaderMenu> */}
          </HeaderNavigation>
          <SideNav
            aria-label='Side navigation'
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                {/* <HeaderMenuItem isCurrentPage href='/login'>
                  Login
                </HeaderMenuItem> */}
                <HeaderMenuItem href='/about'>about</HeaderMenuItem>
                {/* <HeaderMenuItem href='#'>Link 3</HeaderMenuItem>
                <HeaderMenu aria-label='Link 4' menuLinkName='Link 4'>
                  <HeaderMenuItem href='#'>Sub-link 1</HeaderMenuItem>
                  <HeaderMenuItem href='#'>Sub-link 2</HeaderMenuItem>
                  <HeaderMenuItem href='#'>Sub-link 3</HeaderMenuItem>
                </HeaderMenu> */}
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>

          {/* <SideNav
            aria-label='Side navigation'
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <p>coming soon</p>
          </SideNav> */}
          <HeaderGlobalBar />

          <HeaderSideNavItems>
            {/* <HeaderMenuItem href='/contact'>Contact</HeaderMenuItem> */}
          </HeaderSideNavItems>
          <HeaderGlobalBar>
            {/* <HeaderGlobalAction>
              <Link to='/logout'>
                <Logout size={20} />
              </Link>
            </HeaderGlobalAction>

            <HeaderGlobalAction></HeaderGlobalAction> */}
            <HeaderGlobalAction>
              <Link to='/login'>
                <Login size={20} aria-label='Login' />
              </Link>
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
    <LandingPage></LandingPage>
  </>
);

export default Startpage;
