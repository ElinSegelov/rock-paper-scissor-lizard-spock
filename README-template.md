# Frontend Mentor - Rock, Paper, Scissors solution

![Design preview for the Rock, Paper, Scissors coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

The challenge was to build a this Rock, Paper, Scissors game and get it looking as close to the design as possible. Assets to build Sheldon Cooper elaborated version: Rock, paper, scissors, lizard, Spock, was provided so i decided to skip the standard game and do the elaboratet one.

The istruction were the following:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- Maintain the state of the score after refreshing the browser _(optional)_
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

### Screenshot

![Screenshot of conclutionScrenn in desktop view](./design/sceenshot-desktop.png)

![Screenshot of gameboard in mobile view](./design/sceenshot-mobile.png)


### Links

- Live Site URL: (https://rpslses.netlify.app/)

## My process
I decided to use this challenge to try out TailwindCSS and the React hook useContext. I finished the mobile view before starting on the desktop styles and then I made some adjustments for the styling to look good all the way to the desktop break point.

### Built with

- Semantic HTML5 markup
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - For styles

### What I learned

My biggest take-aways from this challenge is getting aquainted with TailwindCSS. I see the potential of it, especially when custom styles are pre-defined but for this chellenge it got somewhat tiresome adding custom sizes and spacings in order to match the design. It is very easy to get into though as the TailwindCSS website provides great documentation.

Trying out useContext for the first time i realized it is much less boilerplate code than Redux to getting started using global states. I've read that there are pros to using Redux in larger apps, but for just managing some variables globally using useContext was smooth.


```Component for the different choices
export const ChoiceImage = (choice) => {
  let chosenImage;

  if (choice.choice === 'rock') chosenImage = rock;
  else if (choice.choice === 'paper') chosenImage = paper;
  else if (choice.choice === 'scissors') chosenImage = scissors;
  else if (choice.choice === 'lizard') chosenImage = lizard;
  else if (choice.choice === 'spock') chosenImage = spock;

  return(
    <div className={`flex items-center content-center w-32 h-32 p-4 m-auto rounded-full bg-gradient-radial from-${choice.choice}1 to-${choice.choice}2 shadow-${choice.choice} relative z-10 lg:w-48 lg:h-48 lg:p-5`}>
      <div className='flex items-center justify-center bg-white rounded-full w-full h-full shadow-inside'>
        <img className='m-2 w-2.5rem h-2.5rem lg:w-20 lg:h-auto' src={chosenImage} alt={choice.choice} />
      </div>
    </div>
  )
}
```
```Logic to determine the winner
if (playersChoice === computersChoice) setResult('tie')
    else if (
      (playersChoice === 'rock' && (computersChoice === 'scissors' || computersChoice === 'lizard')) ||
      (playersChoice === 'paper' && (computersChoice === 'rock' || computersChoice === 'spock')) ||
      (playersChoice === 'scissors' && (computersChoice === 'paper' || computersChoice === 'lizard')) ||
      (playersChoice === 'lizard' && (computersChoice === 'paper' || computersChoice === 'spock')) ||
      (playersChoice === 'spock' && (computersChoice === 'rock' || computersChoice === 'scissors'))
    ) setResult('win')
    else setResult('lose')
```
```
const handleSelection = (value) => {
    const random = Math.floor(Math.random() * 5)
    setComputersChoice(possibleChoices[random])
    setPlayersChoice(value);
    navigate('/conclution')
  }```

### Continued development

For refining the project I could refactor the Boargame component to import the generic ```choiceImage``` instead of repeating alot of code. I started doing it but ran in to some trouble with sizing.

To further development it would be nice to add the possiblity for the player to choose between playing the standard or the elaborated game.


### Useful resources

- [TailwindCSS domumentation](https://tailwindcss.com/) - This domumentation was very helpful as you can just search for the CSS selector or property to see how to use it.

- [Free Code Camps guide to React Context ](https://www.freecodecamp.org/news/react-context-for-beginners/) - Great guide to react Context that I will be referencing again. 


## Author

- Website - [Elin Segelöv](https://elinsegelov.netlify.app/)

