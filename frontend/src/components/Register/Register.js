import React, { useState } from 'react';
import axios from 'axios';
import './regStyle.scss';
import authentication from './Assets/sign-up-form.svg';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  Stack,
  Button,
  TextArea,
  TextInput,
  SelectItem,
  RadioButton,
  RadioButtonGroup,
  Select,
  ToastNotification,
} from '@carbon/react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
      });
      navigate('/');
    } catch (error) {
      if (error.response) {
        console.log(error.response);
        //   console.log(error.response.data.msg)
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      {/*
      <section className='hero has-background-grey-light is-fullheight is-fullwidth'>
        <div className='hero-body'>
          <div className='container'>
            <div className='columns is-centered'>
              <div className='column is-4-desktop'>
                <form onSubmit={Register} className='box'>
                  <p className='has-text-centered'>{msg}</p>
                  <div className='field mt-5'>
                    <label className='label'>Name</label>
                    <div className='controls'>
                      <input
                        type='text'
                        className='input'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='field mt-5'>
                    <label className='label'>Email</label>
                    <div className='controls'>
                      <input
                        type='text'
                        className='input'
                        placeholder='Email'
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
                    <label className='label'>Confirm Password</label>
                    <div className='controls'>
                      <input
                        type='password'
                        className='input'
                        placeholder='******'
                        value={confPassword}
                        onChange={(e) => setConfPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='field mt-5'>
                    <button className='button is-success is-fullwidth'>
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  */}
      <Navbar></Navbar>
      <div className='container'>
        <div className='cds--grid cds--grid--condensed cds--grid--reg--page'>
          <div className='cds--row cds--row-bg '>
            <p className='has-text-centered'>{msg}</p>
            <div className='cds--col cds--row--bg'>
              <Form onSubmit={Register}>
                <Stack gap={5}>
                  <TextInput
                    placeholder='Name'
                    labelText='Name'
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <TextInput
                    placeholder='yourname@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    labelText='Email'
                    type='email'
                    required
                  />

                  <TextInput.PasswordInput
                    labelText='Password'
                    placeholder='******'
                    type='password'
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    required
                    // pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
                  />

                  <TextInput.PasswordInput
                    labelText='Confirm Password'
                    placeholder='******'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    // pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}'
                  />

                  <Button type='submit'> Register</Button>
                </Stack>
                {msg ? (
                  <ToastNotification
                    onClose={function noRefCheck() {}}
                    onCloseButtonClick={function noRefCheck() {}}
                    statusIconDescription='notification'
                    title='form Status'
                    kind='success'
                  />
                ) : null}
              </Form>
            </div>
            <div className='cds--col cds--row--bg'>
              <img
                className='auth--image'
                src={authentication}
                alt='authentication image'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
