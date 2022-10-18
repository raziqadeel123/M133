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
} from '@carbon/react';
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
          <SideNav
            aria-label='Side navigation'
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <p>coming soon</p>
          </SideNav>
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
