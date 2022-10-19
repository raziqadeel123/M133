import { useState, useEffect } from 'react';
import { Grid, Column } from '@carbon/react';
import { Link } from 'react-router-dom';

import { Button, InlineNotification } from '@carbon/react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import BannerImg from './Assets/Mysterious-man.svg';
import Footer from '../Footer/Footer';
import About from '../page/About';

import React from 'react';
import './_override.scss';

const LandingPage = () => {
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [msg, setMsg] = useState('');
  const [auth, setAuth] = useState('');
  const navigate = useNavigate();

  // useEffect(() => {
  //   // refreshToken();
  //   getAuth();
  // }, []);

  const axiosJWT = axios.create();
  const getAuth = async () => {
    try {
      const response = await axiosJWT.get('http://localhost:5000/token', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate('/');
    } catch (error) {
      // var msg = error.response.data;
      setMsg(error.response.data);
      console.log(error.response.data);
    }
  };

  return (
    <>
      <div className='reg-notification'>
        {msg ? (
          <InlineNotification
            actionButtonLabel='Action'
            ariaLabel='closes notification'
            onClose={function noRefCheck() {}}
            onCloseButtonClick={function noRefCheck() {}}
            statusIconDescription='notification'
            subtitle={msg}
            title='Error'
          />
        ) : null}
      </div>
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
              <Button href='/startpage'>Get Started!</Button>

              <Button className='circle' href='/question' onClick={getAuth}>
                play!
              </Button>
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
