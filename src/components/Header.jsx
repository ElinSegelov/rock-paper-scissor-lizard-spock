/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import logo from '../assets/images/logo-bonus.svg'
import { ScoreContext } from '../Helper/Context';

const Header = () => {
  const {score} = useContext(ScoreContext);
  return ( 
    <header className='flex justify-between w-19.5rem p-2 my-8 mx-auto border-2 rounded-md border-headerOutline lg:w-40rem lg:h-fit lg:mx-auto lg:items-center lg:p-5 lg:rounded-2xl'>
      <img src={logo} alt='Rock, paper, scissors, lizard, spock' className='w-16 mx-4 my-2 pt-1 lg:w-7.5rem lg:h.7.5rem lg:m-0'/>
      <figure className='flex flex-col items-center justify-around h-20 px-5 py-2 bg-white rounded-md w-5rem lg:w-40 lg:h-7.5rem lg:rounded-2xl '>
        <p className='text-xs font-semibold uppercase font-barlow text-scoreText lg:text-base lg:tracking-widest'>Score</p>
        <p className='text-5xl font-bold leading-9 text-darkText lg:mb-3'>{score}</p>
      </figure>
    </header>
  )
}

export default Header;