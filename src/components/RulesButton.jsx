import { useState } from 'react';
import rules from '../assets/images/image-rules-bonus.svg';
import close from '../assets/images/icon-close.svg'


const RulesButton = () => {
  const [displayRules, setDisplayRules] = useState(false);

  const handleRulesRequest = () => {
    setDisplayRules(!displayRules)
  }

  return (
    <>
    {displayRules && 
    <article className='absolute top-0 flex flex-col items-center justify-around w-screen h-screen p-8 bg-white z-20 lg:w-25rem lg:h-30rem lg:rounded-lg lg:left-screenCenterWidthRules lg:top-screenCenterHeightRules lg:block'>
      <h1 className='text-3xl font-bold uppercase'>Rules</h1>
      <img className='lg:my-6' src={rules}
        alt='Rules: Scissors cuts paper, paper covers rock, rock crushes lizard, lizard poisons Spock, Spock smashes scissors, scissors decapitates lizard, lizard eats paper, paper disproves Spock, Spock vaporizes rock, and as it always has, rock crushes scissors.' />
      <button className='lg:absolute lg:top-10 lg:right-8' onClick={() => handleRulesRequest()}>
        <img src={close} alt='Close' />
      </button>
    </article>}
      <button onClick={() => handleRulesRequest()} type="button"
        className='self-center px-10 py-2 my-8 text-white uppercase border rounded-lg lg:absolute lg:right-8 bottom-0 lg:hover:scale-105'>
      Rules
    </button> 
  </>
  )
}

export default RulesButton;