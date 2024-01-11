import React from 'react'
import './HomeMain.css'
import HomeCategory from '../HomeCategory/HomeCategory'

const foodInfo = [
  ['Terminal Pizza', 4.8, '(200)', '80₺'],
  ['Position Absolute Acı Pizza', 4.9, '(928)', '85₺'],
  ['useEffect Tavuklu Burger', 4.9, '(462)', '75₺'],
]

const HomeMain = () => {
  return (
    <div className="home-main-container">
      <div className="home-main-comp-content">
        <h4>en çopk paketlenen menüler</h4>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>

        <div className="home-main-categorys">
          <HomeCategory />
        </div>
        <div className="home-main-foods">
          {foodInfo.map((food, i) => {
            return (
              <div className="home-main-food">
                <img src={`./Assets/adv-aseets/food-${i + 1}.png`} alt="food" />
                <h6>{food[0]}</h6>
                <div className="food-info">
                  <p>{food[1]}</p>
                  <p>{food[2]}</p>
                  <h5>{food[3]}</h5>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HomeMain
