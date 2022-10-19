import MaleAvator from './Assets/male3-512.webp';
import Navbar from '../Navbar/Navbar';
import { Grid, Column } from '@carbon/react';
const About = () => {
  return (
    <>
      <Navbar></Navbar>

      <Grid>
        <Column span={8}>
          <div className='about-text'>
            <h3>developers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              officiis nemo impedit dolor! Itaque eaque, numquam, aut excepturi
              cumque, doloremque possimus reprehenderit veritatis laborum sunt
              deleniti aliquam debitis quaerat nam.
            </p>
          </div>
        </Column>
        <Column span={8}>
          <div class='wrapper'>
            <div class='card'>
              <div class='card__header'>
                <div class='card__user__image'>
                  <img
                    class='card__user__avatar'
                    src={MaleAvator}
                    alt='Male avator '
                  />
                </div>
              </div>
              <div class='card__text__container'>
                <div class='card__text__user'>Raziq Adeel</div>
                <div class='card__text__job'>Developer</div>
                <div class='card__text__about'>
                  A person with passion for web designing and a great enthuiast
                  of coding.....
                </div>
                <a href='?' class='btn btn__hire'>
                  contact
                </a>
              </div>
            </div>
            <div class='card'>
              <div class='card__header'>
                <div class='card__user__image'>
                  <img
                    class='card__user__avatar'
                    src={MaleAvator}
                    alt='Male avator '
                  />
                </div>
              </div>
              <div class='card__text__container'>
                <div class='card__text__user'>Okbay Goitom</div>
                <div class='card__text__job'>Developer</div>
                <div class='card__text__about'>
                  A person with passion for web designing and a great enthuiast
                  of coding.....
                </div>
                <a href='?' class='btn btn__hire'>
                  contact
                </a>
              </div>
            </div>
          </div>
        </Column>
      </Grid>
    </>
  );
};
export default About;
