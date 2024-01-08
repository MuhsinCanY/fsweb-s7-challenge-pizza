import React from "react"
import './PizzaTitle.css'

const PizzaTitle = () => {
    return (
      <div className="pizza-title">
        <h1>Teknolojik Yemekler</h1>
        <div className="route-container">
          <div className="route">
            <p>Anasayfa</p>
            <span>-</span>
            <p>Secenekler</p>
            <span>-</span>
            <p className="bold-text">Sipariş Oluştur</p>
          </div>
        </div>
      </div>
    )
}

export default PizzaTitle