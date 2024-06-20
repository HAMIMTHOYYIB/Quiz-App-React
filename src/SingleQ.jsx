import { useState, useEffect } from 'react';
import questions from './utils/questions';

const SingleQ = ({ question, index, setCount, setTrueAns }) => {
  const [showAns, setShowAns] = useState(false);

  useEffect(() => {
    if (showAns) {
      setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
  }, [showAns, setCount]);

  const handleAnswer = (ind) => {
    setShowAns(true);
    if (question.answer === question.options[ind]) {
      setTrueAns((t) => t + 1);
    }
  };

  return (
    <div className="question-container">
      <h3>{question.question}</h3>
      <br/>
      {question.options.map((o, ind) => (
        <div key={ind} className="option-container">
          <input
            type="radio"
            id={`q${index}o${ind}`}
            name={`q${index}`}
            onClick={() => handleAnswer(ind)}
            disabled={showAns}
          />
          <label htmlFor={`q${index}o${ind}`}>{o}</label>
        </div>
      ))}
      <br />
      {showAns && <b className="answer">Answer: {question.answer}</b>}
    </div>
  );
};

export default SingleQ;
