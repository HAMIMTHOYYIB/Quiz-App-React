import { useState } from 'react';
import './App.css';
import SingleQ from './SingleQ';
import questions from './utils/questions';

function App() {
  const [count, setCount] = useState(0);
  const [trueAns, setTrueAns] = useState(0);

  return (
    <div className='main'>
      <div className='qArea'>
        <h1>Answer the questions.</h1>
        {questions.map((q, index) => {
          if (index <= count) {
            return (
              <SingleQ
                key={index}
                question={q}
                index={index} 
                setTrueAns={setTrueAns}
                setCount={setCount}
              />
            );
          }
          return null;
        })}
      </div>
      <div>
        <h2>Your Score: {trueAns}/{questions.length}</h2>
      </div>
    </div>
  );
}

export default App;
