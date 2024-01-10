import React from 'react'
import './HomeAdv.css'

const HomeAdv = () => {
  return (
    <div className="home-adv-container">
      <div className="home-adv-content">
        <div className="home-adv-left home-adv-card">
          <h2>Özel Lezzetus</h2>
          <p>Position:Absulute Acı Burger</p>
          <button>SİPARİŞ VER</button>
        </div>
        <div className="home-adv-right">
          <div className="home-adv-right1 home-adv-card">
            <h3>Hackathlon Burger Menü</h3>
            <button>SİPARİŞ VER</button>
          </div>
          <div className="home-adv-right2 home-adv-card">
            <h3>
              <span className="require">Çoooook</span>{' '}
              <span className="dark-text">hızlı npm gibi kurye</span>{' '}
            </h3>
            <button>SİPARİŞ VER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAdv
