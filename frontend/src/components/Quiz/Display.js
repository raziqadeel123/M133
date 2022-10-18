import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Settings from './Settings.js';
import Question from './Question.js';
import FinalScreen from './FinalScreen.js';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.js';

import './DisplayStyle.css';

function Display() {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.index);

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      console.log(decoded);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate('/');
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwt_decode(response.data.accessToken);
        setName(decoded.name);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />;
  } else if (!questions.length) {
    component = <Settings />;
  } else {
    component = <FinalScreen />;
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='App'>
        <div className='app-container'>{component}</div>
      </div>
    </>
  );
}

export default Display;
