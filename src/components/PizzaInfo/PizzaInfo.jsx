import React from 'react'
import './PizzaInfo.css'

const PizzaInfo = () => {
  return (
    <div className="pizza-info">
      <h2>Position Absulute Acı Pizza</h2>
      <div className="price-rate">
        <h3>85.50₺</h3>
        <p>4.9</p>
        <p>(200)</p>
      </div>
      <p>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir.. Küçük bir pizzaya bazen pizzetta denir.
      </p>
    </div>
  )
}

export default PizzaInfo
