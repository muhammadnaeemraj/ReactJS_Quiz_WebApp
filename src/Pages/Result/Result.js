import React from 'react'
import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react'
import { Button } from '@mui/material';
import './Result.css'

const Result = ({name, score}) => {

  const navigate= useNavigate();

  useEffect(() => {
    if(!name){
      navigate('/');
    }
  }, [name, navigate])
  

  return (
    <div className='result'>
      <div className='title'>Final Score: {score}</div>

      <Button
      variant='contained'
      color='secondary'
      size='large'
      style={{alignSelf: 'center', marginTop: '50'}}
      href='/'
      >
        Go to the Home Page
      </Button>
    </div>
  )
}

export default Result;