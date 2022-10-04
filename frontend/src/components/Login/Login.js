import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  FormGroup,
  Stack,
  TextInput,
  Button,
  ButtonSet,
} from '@carbon/react';
import Navbar from '../Navbar/Navbar';
//import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/login', {
        email: email,
        password: password,
      });
      navigate('/dashboard');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
    <Navbar></Navbar>
      {/**  
      <section className='hero has-background-grey-light is-fullheight is-fullwidth'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns is-centered'>
              <div className='column is-4-desktop'>
                <form onSubmit={Auth} className='box'>
                  <p className='has-text-centered'>{msg}</p>
                  <div className='field mt-5'>
                    <label className='label'>Email or Username</label>
                    <div className='controls'>
                      <input
                        type='text'
                        className='input'
                        placeholder='Username'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='field mt-5'>
                    <label className='label'>Password</label>
                    <div className='controls'>
                      <input
                        type='password'
                        className='input'
                        placeholder='******'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='field mt-5'>
                    <button
                      type='submit'
                      className='button is-success is-fullwidth'
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
     */}

      <Form className='login--form' onSubmit={Auth}>
   
        <FormGroup className='login--formGroup'>
          <legend className='message'>{msg}</legend>
          <Stack gap={7}>
            <TextInput
              labelText='Email or Username'
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextInput
              labelText='Password'
              type='password'
              required
              // pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type='submit' kind='primary'>
              Login
            </Button>
          </Stack>
        </FormGroup>
      </Form>
    </>
  );
};

export default Login;
