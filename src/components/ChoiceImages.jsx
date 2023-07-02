/* eslint-disable no-unused-vars */
import React from 'react';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';
import lizard from '../assets/images/icon-lizard.svg';
import spock from '../assets/images/icon-spock.svg';

export const ChoiceImage = (choice) => {
//! For some reason shadow-outside isn't working with paper and scissors
  let chosenImage;
  if (choice.choice === 'rock') chosenImage = rock;
  else if (choice.choice === 'paper') chosenImage = paper;
  else if (choice.choice === 'scissors') chosenImage = scissors;
  else if (choice.choice === 'lizard') chosenImage = lizard;
  else if (choice.choice === 'spock') chosenImage = spock;
  console.log(choice.choice)

  return(
    <div className={`flex items-center content-center w-32 h-32 p-4 m-auto rounded-full bg-gradient-radial from-${choice.choice}1 to-${choice.choice}2 shadow-outside${choice.choice} relative z-10 lg:w-48 lg:h-48 lg:p-5`}>
      <div className='flex items-center justify-center bg-white rounded-full w-full h-full shadow-inside'>
        <img className='m-2 w-2.5rem h-2.5rem lg:w-20 lg:h-auto' src={chosenImage} alt={choice.choice} />
      </div>
    </div>
  )
}