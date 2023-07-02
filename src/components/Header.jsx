/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import logo from '../assets/images/logo-bonus.svg'
import { ScoreContext } from '../Helper/Context';

//!Kolla font size

const Header = () => {
  const {score} = useContext(ScoreContext);
  return ( 
    <header className='flex justify-between w-auto p-2 m-8 border-2 rounded-md border-headerOutline lg:w-40rem lg:h-10rem lg:mx-auto lg:items-center lg:p-4'>
      <img src={logo} alt='Rock, paper, scissors, lizard, spock' className='w-16 mx-4 my-2 lg:w-7.5rem lg:m-0'/>
      <figure className='flex flex-col items-center justify-around h-20 px-5 py-2 bg-white rounded-md w-5rem lg:w-7.5rem lg:h-28'>
        <p className='text-xs font-semibold uppercase font-barlow text-scoreText'>Score</p>
        <p className='text-5xl font-bold leading-9 text-darkText'>{score}</p>
      </figure>
    </header>
  )
}

export default Header;