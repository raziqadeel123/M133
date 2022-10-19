import MaleAvator from './Assets/male3-512.webp';
const About = () => {
  return (
    <>
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
              A person with passion for web designing and a great enthuiast of
              coding.....
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
              A person with passion for web designing and a great enthuiast of
              coding.....
            </div>
            <a href='?' class='btn btn__hire'>
              contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
