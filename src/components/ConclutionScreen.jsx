/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { ComputersChoiceContext, PlayerChoiceContext, ScoreContext } from '../Helper/Context';
import { Rock, Paper, Scissors, Lizard, Spock } from './ChoiceImages';
import { useNavigate } from 'react-router-dom';

const ConclutionScreen = () => {
  const {playersChoice} = useContext(PlayerChoiceContext);
  const {computersChoice} = useContext(ComputersChoiceContext);
  const {score, setScore} = useContext(ScoreContext);
  const [result, setResult] = useState('')
  const [resultMessage, setResultmessage] = useState('')
  const [showComputersPick, setShowComputersPick] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const pickedByPlayer = document.getElementById('playersPick')
  const pickedByComputer = document.getElementById('computersPick')
  let playersPick;
  let computersPick;
  const navigate = useNavigate();

  const handleValidation = () => {
      if (result === 'tie') setResultmessage('You tied')
      else if (result === 'win') {
        setResultmessage('You win')
        setTimeout(() => {
          setScore(score +1);
          pickedByPlayer.classList.add('bg-winnerGradiant');
        }, 1000)
      } else if (result === 'lose') {
        setResultmessage('You lose')
        setTimeout(() => {
          setScore(score -1);
          pickedByComputer.classList.add('bg-winnerGradiant');
        }, 1000)
      }
  }

  if (computersChoice === 'rock') computersPick = <Rock />
  else if (computersChoice === 'paper') computersPick = <Paper />
  else if (computersChoice === 'scissors') computersPick = <Scissors /> 
  else if (computersChoice === 'lizard') computersPick = <Lizard /> 
  else if (computersChoice === 'spock') computersPick = <Spock /> 

  if (playersChoice === 'rock') playersPick = <Rock />
  else if (playersChoice === 'paper') playersPick = <Paper />
  else if (playersChoice === 'scissors') playersPick = <Scissors /> 
  else if (playersChoice === 'lizard') playersPick = <Lizard /> 
  else if (playersChoice === 'spock') playersPick = <Spock /> 
  

  useEffect(() => {
    if (playersChoice === computersChoice) setResult('tie')
    else if (
      (playersChoice === 'rock' && (computersChoice === 'scissors' || computersChoice === 'lizard')) ||
      (playersChoice === 'paper' && (computersChoice === 'rock' || computersChoice === 'spock')) ||
      (playersChoice === 'scissors' && (computersChoice === 'paper' || computersChoice === 'lizard')) ||
      (playersChoice === 'lizard' && (computersChoice === 'paper' || computersChoice === 'spock')) ||
      (playersChoice === 'spock' && (computersChoice === 'rock' || computersChoice === 'scissors'))
    ) setResult('win')
    else setResult('lose')

    setTimeout(() => {
      setShowComputersPick(true)
      handleValidation()
    }, 1000)
    
    setTimeout(() => {
      setShowResult(true)
    }, 2000)
    
  }, [result])

  //! Justera färgen på diven som visas !showComputerPick
  return (
    <div className='flex justify-center w-23.4rem relative self-center'>
      <div id='playersPick' className='flex flex-col content-center justify-center w-60 h-60 absolute top-resultPosition -left-4 rounded-full'>
      <div className='relative top-5'>
        {playersPick}
        <p className='uppercase text-center text-white mt-6'>You picked</p>
      </div>
    </div>
    <div id='computersPick' className='flex flex-col content-center justify-center w-60 h-60 absolute top-resultPosition -right-4 rounded-full'>
      <div className='relative top-5'>
        {showComputersPick 
          ? <>{computersPick}</>
          : <div className=' w-28 h-28 bg-darkerBlue rounded-full mx-auto lg:mt-1 lg:mb-8 '></div>
        }
          <p id='computerPick' className=' uppercase text-center text-white mt-6'>The House picked</p>
      </div>
      </div>
      {showResult && 
      <div className='absolute top-17rem m-auto flex flex-col content-center'>
        <h2 className='uppercase text-5xl text-white'>{resultMessage}</h2>
        <button className='px-10 py-2 my-6 text-scoreText bg-white uppercase border rounded-lg' onClick={() => navigate('/')} type='button'>Play again</button>
      </div>}
      {/*<div className='w-10rem h-10rem shadow-big rounded-full'></div>*/}
    </div>
  )
}

export default ConclutionScreen;