import React from 'react'
import './HomeCategory.css'
import icon1 from './category-icons/1.svg'
import icon2 from './category-icons/2.svg'
import icon3 from './category-icons/3.svg'
import icon4 from './category-icons/4.svg'
import icon5 from './category-icons/5.svg'
import icon6 from './category-icons/6.svg'

const icons = [
  ['YENİ!Kore', icon1],
  ['Pizza', icon2],
  ['Burger', icon3],
  ['Kızartmalar', icon4],
  ['FastFood', icon5],
  ['Gazlı İçecekler', icon6],
]

const HomeCategory = () => {
  return (
    <div className="category-container">
      <div className="categorys">
        {icons.map((icon) => {
          return (
            <div className="category-icon">
              <img src={icon[1]} alt="icon" />
              <p>{icon[0]}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomeCategory

/* <div className="category-icon">
          <img src={icon1} alt="icon" />
          <p>YENİ!Kore</p>
        </div> */
