import React from 'react'
import './Home.css'

import { useHistory } from 'react-router-dom/'
import HomeCategory from '../components/HomeCategory/HomeCategory'
import HomeAdv from '../components/HomeAdv/HomeAdv'
import Footer from '../components/Footer/Footer'
import HomeMain from '../components/HomeMain/HomeMain'

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
        <button data-cy="home-btn" id="order-pizza" onClick={handleClick}>
          ACIKTIM
        </button>
      </div>
      <HomeCategory />
      <div className="home-main-content">
        <HomeAdv />
        <HomeMain />
      </div>
      <Footer />
    </>
  )
}
export default Home
