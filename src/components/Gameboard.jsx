/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';
import lizard from '../assets/images/icon-lizard.svg';
import spock from '../assets/images/icon-spock.svg';
import pentagon from '../assets/images/bg-pentagon.svg'
import { useNavigate } from 'react-router-dom';
import { ComputersChoiceContext, PlayerChoiceContext } from '../Helper/Context';



const Gameboard = () => {
  const {setPlayersChoice} = useContext(PlayerChoiceContext);
  const {setComputersChoice} = useContext(ComputersChoiceContext);
  const possibleChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

  const navigate = useNavigate();
  
  const handleSelection = (value) => {
    const random = Math.floor(Math.random() * 5)
    setComputersChoice(possibleChoices[random])
    setPlayersChoice(value);
    navigate('/conclution')
  }
  //! Importera ChoiceImages istället. Lägg yttre lagret av respektive som en div och importera dem i en knapp
  return (
    <section className='relative flex py-16 mx-12 mb-8 w-17.5rem bg-60 self-center lg:my-8'>
      <button 
        value='scissors' 
        onClick={(event) => handleSelection(event.currentTarget.value)}  
        className='absolute flex items-center content-center w-20 h-20 p-2 rounded-full bg-gradient-radial from-scissors1 to-scissors2 top-6 left-screenCenter lg:w-32 lg:h-32 lg:p-3 lg:top-0 lg:left-screenCenterDesktop'>
        <div className='flex items-center justify-center bg-white rounded-full w-full h-full'>
          <img className='m-2 w-3rem h-2.5rem lg:w-16 lg:h-auto' src={scissors} alt='scissors' />
        </div>
      </button>
      <button 
        value='spock'
        onClick={(event) => handleSelection(event.currentTarget.value)} 
        className='absolute flex items-center content-center w-20 h-20 p-2 rounded-full top-24 left-1 bg-gradient-radial from-spock1 to-spock2 lg:-left-20 lg:top-28 lg:w-32 lg:h-32 lg:p-3'>
        <div className='flex items-center justify-center  bg-white rounded-full w-full h-full'>
          <img className='m-2 w-3rem h-2.5rem ml-3 lg:w-16 lg:h-auto lg:pl-1' src={spock} alt='Spock' />
        </div>
      </button>
      <button
        value='paper' 
        onClick={(event) => handleSelection(event.currentTarget.value)} 
        className='absolute flex items-center content-center w-20 h-20 p-2 rounded-full top-24 right-1 bg-gradient-radial from-paper1 to-paper2 lg:w-32 lg:h-32 lg:p-3 lg:-right-20 lg:top-28'>
        <div className='flex items-center justify-center bg-white rounded-full w-full h-full'>
          <img className='m-2 w-3rem h-2.5rem lg:w-16 lg:h-auto' src={paper} alt='paper' />
        </div>
      </button>
      <button 
        value='lizard'
        onClick={(event) => handleSelection(event.currentTarget.value)}
        className='absolute flex items-center content-center w-20 h-20 p-2 rounded-full bottom-6 left-10 bg-gradient-radial from-lizard1 to-lizard2 lg:w-32 lg:h-32 lg:p-3 lg:-left-4 lg:bottom-0'>
        <div className='flex items-center justify-center bg-white rounded-full w-full h-full'>  
          <img className='m-2 w-3rem h-2.5rem lg:w-16 lg:h-auto' src={lizard} alt='lizard' />
        </div>
      </button>
      <button 
        onClick={(event) => handleSelection(event.currentTarget.value)}
        value='rock'
        className='absolute flex items-center content-center w-20 h-20 p-2 rounded-full bottom-6 right-10 bg-gradient-radial from-rock1 to-rock2 lg:w-32 lg:h-32 lg:p-3 lg:-right-4 lg:bottom-0'>
        <div className='flex items-center justify-center bg-white rounded-full w-full h-full'>
          <img className='m-2 w-3rem h-2.5rem lg:w-16 lg:h-auto' src={rock} alt='rock' />      
        </div>
      </button>
      <img className='w-48 m-auto lg:w-auto ' src={pentagon} alt='' />
    </section>
  )
}

export default Gameboard;