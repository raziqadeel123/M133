import { useSelector } from 'react-redux';
import Settings from './Settings.js';
import Question from './Question.js';
import FinalScreen from './FinalScreen.js';

import './DisplayStyle.css';

function Display() {
  const questions = useSelector((state) => state.questions);
  const questionIndex = useSelector((state) => state.index);

  let component;

  if (questions.length && questionIndex + 1 <= questions.length) {
    component = <Question />;
  } else if (!questions.length) {
    component = <Settings />;
  } else {
    component = <FinalScreen />;
  }

  return (
    <div className='App'>
      <div className='app-container'>{component}</div>
    </div>
  );
}

export default Display;
