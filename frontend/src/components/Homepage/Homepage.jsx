import React from "react";
import { Button, ButtonSet} from "@carbon/react";
import BannerImage from './Assets/man-sweeping-each-and-every-infected-places.svg';
import {  Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

const Homepage = () =>{
 

return (
  <>
    <div className='cds--grid cds--grid--condensed'>
      <div className='cds--row'>
        <div className='cds--col'>
          <h1 className='slogan--h1'>The best Cleaning App for your Company</h1>
          <ButtonSet>
            <Link className='btn--mar-right' to='/login'>
              <Button kind='primary'>Login</Button>
            </Link>
            <Link className='btn--mar-right' to='/register'>
              <Button kind='secondary'>Registration</Button>
            </Link>
          </ButtonSet>
        </div>
        <div className='cds--col'>
          <img
            className='img--banner'
            src={BannerImage}
            alt='Women-cleaning-Homepage-Banner'
          />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </>
);
}
export default Homepage