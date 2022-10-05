import { Grid, Column, Link } from '@carbon/react';
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Button, Tabs, Tab, TabList, TabPanels, TabPanel } from '@carbon/react';
import BannerImg from './Assets/banner.png';
import TeamDesgin from './Assets/undraw_remote_design_team_re_urdx.svg';
import React from 'react';
import './_override.scss';

const LandingPage = () => {
  return (
    <Grid className='landing-page' fullWidth>
      <Column lg={16} md={8} sm={4} className='landing-page__banner'>
        1
      </Column>
      <Column lg={16} md={8} sm={4} className='landing-page__r2'>
        <Grid className='tabs-group-content'>
          <Column md={4} lg={7} sm={4} className='landing-page__tab-content'>
            7/16
          </Column>
          <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
            8/16
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} className='landing-page__r3'>
        <Grid>
          <Column md={4} lg={4} sm={4}>
            1/4
          </Column>
          <Column md={4} lg={4} sm={4}>
            1/4
          </Column>
          <Column md={4} lg={4} sm={4}>
            1/4
          </Column>
          <Column md={4} lg={4} sm={4}>
            1/4
          </Column>
        </Grid>
      </Column>
      <Column lg={16} md={8} sm={4} className='landing-page__banner2'>
        <h1 className='landing-page__heading'>Hello &amp; Wellcome</h1>

        <Breadcrumb noTrailingSlash>
          <BreadcrumbItem>
            <Button className='gettingStarted-btn' href='/startpage'>
              Getting started
            </Button>
          </BreadcrumbItem>
        </Breadcrumb>
      </Column>
      <Column lg={16} md={8} sm={4} className='landing-page__r2'>
        <Tabs defaultSelectedIndex={0}>
          <TabList className='tabs-group'>
            <Tab>About</Tab>
            <Tab>Design</Tab>
            <Tab>Develop</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Grid className='tabs-group-content'>
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className='landing-page__tab-content'
                >
                  <h2 className='landing-page__subheading'>What is Todo?</h2>
                  <p className='landing-page__p'>
                    Its is a web Application basend on react and Node.js used
                    IBM Carbon Desgin which an open-source design system for
                    digital products and experiences. With the IBM Design
                    Language as its foundation, the system consists of working
                    code, design tools and resources, human interface
                    guidelines, and a vibrant community of contributors.
                  </p>
                  <Button>Learn more</Button>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <img
                    class='landing-page__illo'
                    src={BannerImg}
                    alt='Carbon illustration'
                  />
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className='tabs-group-content'>
                <Column
                  md={4}
                  lg={7}
                  sm={4}
                  className='landing-page__tab-content'
                >
                  <h2 className='landing-page__subheading'>Desingers</h2>
                  <p className='desgin-Content'>
                    All the Desgin is made by Okbay Goitom and Raziq Adeel. For
                    our design layout we have user figma to visuaise better our
                    desgin censept.
                  </p>
                </Column>
                <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
                  <img src={TeamDesgin}></img>
                </Column>
              </Grid>
            </TabPanel>
            <TabPanel>
              <Grid className='tabs-group-content'>
                <Column
                  lg={16}
                  md={8}
                  sm={4}
                  className='landing-page__tab-content'
                >
                  <h2 className='landing-page__subheading'>Developers</h2>
                  All the Credits for the develpment, from the scratch, mind
                  map, Diagramms, Desgin, and Programming has been done by Okbay
                  and Raziq.
                </Column>
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
      {/**
      <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
        <img
          className='landing-page__illo'
          src={BannerImg}
          alt='Carbon illustration'
        />
      </Column>
       */}
      <Column lg={16} md={8} sm={4} className='landing-page__r3'>
        <Grid>
          <Column md={4} lg={4} sm={4}>
            <h3 className='landing-page__label'>The Principles</h3>
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Open
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Modular
          </Column>
          <Column md={4} lg={4} sm={4}>
            Carbon is Consistent
          </Column>
        </Grid>
      </Column>
    </Grid>
  );
};

export default LandingPage;
