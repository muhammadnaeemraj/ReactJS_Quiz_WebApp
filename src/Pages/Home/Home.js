import { TextField, MenuItem, Button } from "@mui/material";
import Categories from "../../Data/Categories";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import './Home.css'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Home = ({ name, setName, fetchQuestions }) => {

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    }
    else {
      setError(false);
      navigate('/quiz');
      fetchQuestions(category, difficulty);
    }
  };

  return (
    <div className='content'>
      <div className="setting">
        <span style={{ fontSize: '30px' }}>Settings</span>

        <div className="settings_select">
          {error && <ErrorMessage />}

          <TextField
            style={{ marginBottom: 30 }}
            label="Enter Your Name"
            variant="outlined"
            value={name}
            autoComplete='off'
            onChange={(e) => setName(e.target.value)}
            required
          />

          <TextField
            select
            style={{ marginBottom: 30 }}
            label="Select Category"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required>
            {
              Categories.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))
            }
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            variant="outlined"
            style={{ marginBottom: 30 }}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            required>
            <MenuItem type="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem type="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem type="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img className='banner' src="/quiz.svg" alt="quiz snapshot" />
    </div>
  )
}

export default Home;