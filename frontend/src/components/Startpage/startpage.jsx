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
            TODO
          </HeaderName>
          <HeaderNavigation aria-label='Carbon Tutorial'>
            <HeaderMenuItem href='/contact'>Contact</HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label='Side navigation'
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href='/contact'>Contact</HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar />
        </Header>
      )}
    />
    <LandingPage></LandingPage>
  </>
);

export default Startpage;
