import { Grid, Column, FlexGrid, ColumnHang } from '@carbon/react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from '@carbon/react';
import { Button, Tabs, Tab, TabList, TabPanels, TabPanel } from '@carbon/react';
import BannerImg from './Assets/Mysterious-man.svg';
import Footer from '../Footer/Footer';
import About from '../page/About';

import React from 'react';
import './_override.scss';

const LandingPage = () => {
  return (
    <>
      <Grid className='landingpage-container'>
        <Column span={8}>
          <div className='landingpage-text'>
            <div className='landingpage-title'>
              <h1 className='title'>
                Play & have fun with the <span>Quiz</span>
              </h1>
            </div>

            <div className='description'>
              <p>
                The Quiz is more Customize able, you can choose Questions
                category, you can Customize the amount of Question
              </p>
            </div>

            <div>
              <Link to='/startpage'>
                <Button>Get Started!</Button>
              </Link>
            </div>
          </div>
        </Column>
        <Column span={8}>
          <img className='landingpage-img' src={BannerImg}></img>
        </Column>
      </Grid>
      <Footer></Footer>
    </>
  );
};

export default LandingPage;
