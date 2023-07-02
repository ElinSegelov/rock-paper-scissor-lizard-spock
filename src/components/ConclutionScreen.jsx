/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { ComputersChoiceContext, PlayerChoiceContext, ScoreContext } from '../Helper/Context';
import { ChoiceImage } from './ChoiceImages';
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

  if (computersChoice === 'rock') computersPick = <ChoiceImage choice='rock' />
  else if (computersChoice === 'paper') computersPick = <ChoiceImage choice='paper' />
  else if (computersChoice === 'scissors') computersPick = <ChoiceImage choice='scissors' /> 
  else if (computersChoice === 'lizard') computersPick = <ChoiceImage choice='lizard' />
  else if (computersChoice === 'spock') computersPick = <ChoiceImage choice='spock' />
  
/*   if (playersChoice === 'rock') playersPick = <Rock />
 */  if (playersChoice === 'rock') playersPick = <ChoiceImage choice='rock' />
  else if (playersChoice === 'paper') playersPick = <ChoiceImage choice='paper' />
  else if (playersChoice === 'scissors') playersPick = <ChoiceImage choice='scissors' />
  else if (playersChoice === 'lizard') playersPick = <ChoiceImage choice='lizard' />
  else if (playersChoice === 'spock') playersPick = <ChoiceImage choice='spock' />
  

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

  return (
    <div className='flex justify-center w-23.4rem relative self-center lg:w-fit lg:justify-between lg:bottom-20'>
      <div id='playersPick' className='flex flex-col content-center justify-center w-60 h-60 absolute top-resultPosition -left-4 rounded-full lg:relative lg:top-0 lg:left-36 lg:w-35rem lg:h-35rem '>
        <div className='relative top-5 flex flex-col lg:flex-col-reverse lg:-top-6'>
          {playersPick}
          <p className='uppercase text-center text-white my-6'>You picked</p>
        </div>
      </div>
          {showResult && 
          <div className='absolute top-17rem m-auto flex flex-col content-center lg:relative lg:z-10 lg:top-0'>
            <h2 className='uppercase text-5xl text-white'>{resultMessage}</h2>
            <button className='px-10 py-2 my-6 text-scoreText bg-white uppercase border rounded-lg' onClick={() => navigate('/')} type='button'>Play again</button>
          </div>}
      <div id='computersPick' className='flex flex-col content-center justify-center w-60 h-60 absolute top-resultPosition -right-4 rounded-full lg:relative lg:top-0 lg:right-36 lg:w-35rem lg:h-35rem '>
        <div className='relative top-5 flex flex-col lg:flex-col-reverse lg:-top-6'>
          {showComputersPick 
            ? <>{computersPick}</>
            : <div className=' w-28 h-28 bg-darkerBlue rounded-full mx-auto lg:w-9.5rem lg:h-9.5rem lg:my-5 '></div>
          }
            <p id='computerPick' className=' uppercase text-center text-white my-6'>The House picked</p>
        </div>
      </div>
      {/*<div className='w-10rem h-10rem shadow-big rounded-full'></div>*/}
    </div>
  )
}

export default ConclutionScreen;