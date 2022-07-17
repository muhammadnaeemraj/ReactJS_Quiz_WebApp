import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header.jsx'
import Home from './Pages/Home/Home.js'
import Quiz from './Pages/Quiz/Quiz.js';
import Result from './Pages/Result/Result.js';

function App() {

  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);


  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)

    setQuestions(data.results);
  }


  return (
    <BrowserRouter basename=''>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
          <Route path='/quiz' exact element={<Quiz name={name} questions={questions} setQuestions={setQuestions} score={score} setScore={setScore} />} />
          <Route path='/result' exact element={<Result name={name} score={score} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
