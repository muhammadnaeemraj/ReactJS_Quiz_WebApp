import './Question.css';
import { useState } from 'react';
import { Button } from "@mui/material";
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Question = ({
    currQuestion,
    setCurrQuestion,
    options,
    correct,
    score,
    setScore,
    questions,
    setQuestions
}) => {
    const [selected, setSelected] = useState()
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const handleSelect = (opt) => {
        if (selected === opt && selected === correct) {
            return "select";
        }
        else if (selected === opt && selected !== correct) {
            return "wrong";
        }
        else if (opt === correct) {
            return "select";
        }
    };

    const handleCheck = (opt) => {
        setSelected(opt);
        if (opt === correct && setScore(score + 1))
            setError(false);
    }

    const handleQuit = () => {

    }


    const handleNext = () => {
        if (currQuestion > 8) {
            navigate('/result')
        } else if (selected) {
            setCurrQuestion(currQuestion + 1);
            setSelected();
            setError();
        } else {
            setError("Please select an option first");
        }
    }


    return (
        <div className='question'>
            <h1>Question {currQuestion + 1}</h1>

            <div className="singleQuestion">
                <h2>{questions[currQuestion].question}</h2>

                <div className="options">
                    {error && <span
                        style={{
                            width: "100%",
                            padding: 10,
                            marginBottom: 10,
                            borderRadius: 4,
                            backgroundColor: "transparent",
                            textAlign: "center",
                            color: "red",
                            textTransform: "capitalize"
                        }}
                    >{error}</span>}
                    {
                        options &&
                        options.map((opt) => (
                            <button
                                onClick={() => handleCheck(opt)}
                                className={`singleOption ${selected && handleSelect(opt)}`}
                                key={opt}
                                disabled={selected}
                            >
                                {opt}
                            </button>
                        ))
                    }
                </div>
                <div className="controls">
                    <Button
                        variant='contained'
                        color='secondary'
                        size='large'
                        style={{ width: 185 }}
                        href='/'
                        onClick={handleQuit}
                    >
                        Quit
                    </Button>
                    <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        style={{ width: 185 }}
                        onClick={handleNext}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Question;