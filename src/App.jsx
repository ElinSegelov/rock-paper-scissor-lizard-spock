import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from 'react';
//import Footer from "./components/Footer"
import Gameboard from "./components/Gameboard"
import Header from "./components/Header"
import RulesButton from "./components/RulesButton"
import { ComputersChoiceContext, PlayerChoiceContext, ScoreContext } from "./Helper/Context";
import ConclutionScreen from "./components/conclutionScreen.jsx";

const App = () => {

  const [playersChoice, setPlayersChoice] = useState('')
  const [computersChoice, setComputersChoice] = useState('')
  const [score, setScore] = useState(0)

  return (
    <BrowserRouter>
      <PlayerChoiceContext.Provider value={{playersChoice, setPlayersChoice}}>
      <ComputersChoiceContext.Provider value={{computersChoice, setComputersChoice}}>
      <ScoreContext.Provider value={{score, setScore}}>
        <section className='overflow-hidden relative w-screen h-screen flex flex-col align-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lighterBlue to-darkerBlue'>
          <Header />
          <main className='flex flex-col justify-between w-full h-full align-center'>
            <Routes>
              <Route path='/' element={<Gameboard /> }/>
              <Route path='conclution' element={<ConclutionScreen />} />
            </Routes>
            <RulesButton />
          </main>
        </section>
        {/* <Footer /> */}
      </ScoreContext.Provider>
      </ComputersChoiceContext.Provider>
      </PlayerChoiceContext.Provider>
    </BrowserRouter>
  )
}

export default App
