/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';
import lizard from '../assets/images/icon-lizard.svg';
import spock from '../assets/images/icon-spock.svg';

export const Rock = () => {
  return (
    <button className='flex items-center content-center w-32 h-32 p-2 m-auto rounded-full bg-gradient-radial from-rock1 to-rock2 lg:w-32 lg:h-32 lg:p-3'>
      <div className='flex items-center justify-center bg-white rounded-full w-full h-full'>
        <img className='m-2 w-2.5rem h-2.5rem lg:w-16 lg:h-auto' src={rock} alt='rock' />
      </div>
    </button>
  )
}

export const Paper = () => {
  return (
    <button className='flex items-center content-center w-32 h-32 p-2 m-auto rounded-full bg-gradient-radial from-paper1 to-paper2 lg:w-32 lg:h-32 lg:p-3'>
      <div className='flex items-center justify-center bg-white rounded-full w-full h-full'>
        <img className='m-2 w-2.5rem h-2.5rem lg:w-16 lg:h-auto' src={paper} alt='paper' />
      </div>
    </button>
  )
}

export const Scissors = () => {
  return (
    <button className='flex items-center content-center w-32 h-32 p-2 m-auto rounded-full bg-gradient-radial from-scissors1 to-scissors2 lg:w-32 lg:h-32 lg:p-3'>
      <div className='flex items-center justify-center bg-white rounded-full w-full h-full'>
        <img className='m-2 w-2.5rem h-2.5rem lg:w-16 lg:h-auto' src={scissors} alt='scissors' />
      </div>
    </button>
  )
}

export const Lizard = () => {
  return (
    <button className='flex items-center content-center w-32 h-32 p-2 m-auto rounded-full bg-gradient-radial from-lizard1 to-lizard2 lg:w-32 lg:h-32 lg:p-3'>
      <div className='flex items-center justify-center bg-white rounded-full w-full h-full'>
        <img className='m-2 w-2.5rem h-2.5rem lg:w-16 lg:h-auto' src={lizard} alt='lizard' />
      </div>
    </button>
  )
}

export const Spock = () => {
  return (
    <button className='flex items-center content-center w-32 h-32 p-2 m-auto rounded-full bg-gradient-radial from-spock1 to-spock2 lg:w-32 lg:h-32 lg:p-3'>
      <div className='flex items-center justify-center bg-white rounded-full w-full h-full'>
        <img className='m-2 w-2.5rem h-2.5rem lg:w-16 lg:h-auto lg:pl-1' src={spock} alt='spock' />
      </div>
    </button>
  )
}



