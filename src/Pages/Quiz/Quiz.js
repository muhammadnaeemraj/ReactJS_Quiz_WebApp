import './Quiz.css';
import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Quiz = ({ name, questions, setQuestions, score, setScore }) => {

  const [options, setOptions] = useState();
  const [currQuestion, setCurrQuestion] = useState(0);

  useEffect(() => {

    setOptions(questions && handleShuffle([
      questions[currQuestion]?.correct_answer,
      ...questions[currQuestion]?.incorrect_answers]));

    console.log(questions);

  }, [questions]);

  const handleShuffle = (opt) => {
    return opt.sort(() => Math.random() - 0.5);
  }

  console.log(options);

  return (
    <div className='quiz'>
      <div className="subTitle">
        <span>Welcome {name}!</span>

        {questions ? (
          <>Questions</>
        ) : (
          <CircularProgress 
          color="inherit" 
          size={100} 
          thickness={1} 
          style={{ margin: 150 }} />
        )}
      </div>
    </div>
  )
}

export default Quiz;