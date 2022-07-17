import './Quiz.css';
import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Question from '../../components/Question/Question';

const Quiz = ({ name, questions, setQuestions, score, setScore }) => {

  const [options, setOptions] = useState();
  const [currQuestion, setCurrQuestion] = useState(0);

  useEffect(() => {

    setOptions(questions && handleShuffle([
      questions[currQuestion]?.correct_answer,
      ...questions[currQuestion]?.incorrect_answers]));

    console.log(questions);

  }, [questions, currQuestion]);

  const handleShuffle = (opt) => {
    return opt.sort(() => Math.random() - 0.5);
  }

  console.log(options);

  return (
    <div className='quiz'>
        <span className="subTitle">Welcome {name}!</span>

        {questions ? (
          <>
            <div className="quizInfo">
              <span>{questions[currQuestion].category}</span>
              <span>Score: {score}</span>
            </div>

            <Question 
              currQuestion = {currQuestion}
              setCurrQuestion ={setCurrQuestion}
              options={options}
              correct={questions[currQuestion]?.correct_answer}
              score={score}
              setScore={setScore}
              questions={questions}
              setQuestions={setQuestions}
            />
          </>
        ) : (
          <CircularProgress 
          color="inherit" 
          size={50} 
          thickness={1} 
          style={{ margin: 150 }} />
        )}
    </div>
  )
}

export default Quiz;