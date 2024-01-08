import React from 'react'
import './Home.css'

import { useHistory } from 'react-router-dom/'

const Home = () => {
  const history = useHistory()

  const handleClick = () => {
    history.push('/pizza')
  }

  return (
    <>
      <div className="home-container">
        <h1>Teknolojik Yemekler</h1>
        <h2>KOD ACIKTIRIR</h2>
        <h2>PIZZA, DOYURUR</h2>
        <button id="order-pizza" onClick={handleClick}>
          ACIKTIM
        </button>
      </div>
    </>
  )
}
export default Home
