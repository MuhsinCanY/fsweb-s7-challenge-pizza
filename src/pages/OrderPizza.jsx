import React from 'react'
import './OrderPizza.css'
import PizzaTitle from '../components/PizzaTitle/PizzaTitle.jsx'
import PizzaInfo from '../components/PizzaInfo/PizzaInfo.jsx'

const materials = [
  'Pepperoni',
  'Sosis',
  'Domates',
  'Biber',
  'Mısır',
  'Sucuk',
  'Kanada Jambonu',
  'Ananas',
  'Tavuk Izgara',
  'Jalepeno',
  'Kabak',
  'Soğan',
  'Sarımsak',
]

const OrderPizza = () => {
  return (
    <>
      <PizzaTitle />
      <div className="pizza-container">
        <div className="pizza-content">
          <PizzaInfo />
          <div className="pizza-size-paste">
            <div className="pizza-size">
              <h4>
                Boyut Seç<span className="require"> *</span>
              </h4>
              <div className="size">
                <label id="kucuk">
                  <input type="radio" />
                  {' '}Küçük
                </label>
                <label>
                  <input type="radio" />
                  {'  '}Orta
                </label>
                <label>
                  <input type="radio" />
                  {'  '}Büyük
                </label>
              </div>
            </div>
            <div className="pizza-paste">
              <h4>
                Hamur Seç<span className="require"> *</span>
              </h4>
              <select>
                <option hidden defaultValue>
                  Hamur Kalınlığı
                </option>
                <option value="ince">İnce</option>
                <option value="normal">Normal</option>
                <option value="kalın">Kalın</option>
              </select>
            </div>
          </div>
          <div className="pizza-extra-material">
            <h3>Ek Malzemeler</h3>
            <p>En fazla 10 malzeme saçiniz. 5₺</p>
            <div className="pizza-material-checkboxs">
              {materials.map((m) => {
                return (
                  <div key={m}>
                    <input type="checkbox" />
                    <label>{m}</label>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="pizza-order-note">
            <h3>Sipariş Notu</h3>
            <input
              type="textarea"
              placeholder="Siparişinize eklemek istediğiniz bir not varmı?"
            />
          </div>
          <div className="divider"></div>
          <div className="pizza-order">
            <div className="pizza-order-quantity">
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
            <div className="pizza-price-result">
              <h3>Sipariş Toplam</h3>
              <div className="price-descriptions">
                <div className="description">
                  <p>Seçimler</p>
                  <p>25.00₺</p>
                </div>
                <div className="description result">
                  <p>Toplam</p>
                  <p>110.50₺</p>
                </div>
              </div>
              <button className="pizza-order-button">SİPARİŞ VER</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default OrderPizza
