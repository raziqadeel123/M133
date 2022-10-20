import React from 'react';
import { Accordion, AccordionItem } from '@carbon/react';
import Navbar from './Navbar/Navbar';

const Termandconditions = () => {
  return (
    <>
      <Navbar></Navbar>
      <div class='cds--grid cds--grid--condensed acc-container'>
        <div class='cds--row'>
          <div class='cds--col col--padding'>
            <h3 className='acc-title'>Term And Conditions </h3>
            <Accordion>
              <AccordionItem title='Who we are?'>
                <p>
                  The customers have the possibility to buy on kick different
                  shoes from all top brands in the world. Kick is developed by
                  Goitom Okbay and Raziq Adeel as a school project. Our website
                  address is: kick
                </p>
              </AccordionItem>
              <AccordionItem title='Prices and costs'>
                <p>
                  All prices are inclusive of VAT. There is no minimum order
                  value. We ship by Swiss Post or other carrier of our choice.
                </p>
              </AccordionItem>
              <AccordionItem title='Payment conditions'>
                <p>
                  The payment is made through the WoCommere payment methods, the
                  customer can purchase either cash on delivery or with the
                  credit card / debit card. For the credit card data, the
                  customer can choose whether to have the credit card
                  information stored or not
                </p>
              </AccordionItem>
              <AccordionItem title='Content & Images '>
                <p>
                  Credit for all images and content in this Project is from
                  <a href='https://undraw.co/'>undraw</a> and open source and
                  the api that we are using
                  <a href='https://opentdb.com/'>opentdb</a> and all the
                  illstration are from
                  <a href='https://freeillustrations.xyz/'>freeillustrations</a>
                </p>
              </AccordionItem>
            </Accordion>
          </div>
          <div class='cds--col col--padding'>
            <h3 className='acc-title'>Data protection </h3>
            <Accordion>
              <AccordionItem title='Personal data'>
                <p>
                  It is information that indicates your identity, such as name,
                  address, postal address, delivery address, telephone number
                  and email. Kick collect, store and process this data during
                  the initiation, conclusion, processing and cancellation of a
                  sales contract. We use the data that you provide us with an
                  order or by email only for correspondence with customers and
                  only for the purpose for which you have provided them to us.
                  We ensure that your personal data will not be disclosed to
                  third parties unless we are required to do so by law or you
                  have given us your prior consent. If you open a customer
                  account, you agree that your inventory data such as name,
                  address, e-mail address, and bank details as well as your
                  usage data (username, password) will be stored by us or the
                  Kick regardless of a specific order transaction. This gives
                  you the opportunity to order with your e-mail address and your
                  personal password on the Shop Kick and to subscribe to our
                  newsletter. You will be asked separately to give this consent.
                </p>
              </AccordionItem>
              <AccordionItem title='Consent and revocation'>
                <p>
                  you can request us at anytime to delete or modify your data.
                </p>
              </AccordionItem>
              <AccordionItem title='Anonymized data'>
                <p>
                  Your visit to our website is logged. Essentially, the IP
                  address currently used by your PC, the date and time, the
                  browser type and the operating system of your PC as well as
                  the pages you have viewed are recorded. A personal reference
                  is usually not possible for us and is also not intended. This
                  data is only collected for the purpose of data security and to
                  optimize our web offer. Any other evaluation of the data,
                  except for statistical purposes and then generally in an
                  anonymized form, does not take place. No personal surfing
                  profiles or similar are created or processed either.
                </p>
              </AccordionItem>
              <AccordionItem title='Use of cookies'>
                <p>
                  A use of our offer takes place with the use of a cookie. The
                  prerequisite for this is that you have activated the cookies
                  in your browser settings. In the cookie, a randomly generated
                  session code and, if necessary, your recognize. In addition,
                  we store the page from which you came to our pages.
                </p>
              </AccordionItem>
              <AccordionItem title='Links to other websites'>
                <p>
                  We occasionally refer to the websites of third parties.
                  Although we carefully select these third parties, we cannot
                  guarantee or assume liability for the accuracy or completeness
                  of the content or the data security of third-party websites.
                  Also, this privacy policy does not apply to linked third-party
                  websites.
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Termandconditions;
