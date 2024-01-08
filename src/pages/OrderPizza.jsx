import React from 'react'

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
      <div className="pizza-title">
        <h1>Teknolojik Yemekler</h1>
        <div className="route">
          <p>Anasayfa</p>
          <span>-</span>
          <p>Secenekler</p>
          <span>-</span>
          <p className="bold-text">Sipariş Oluştur</p>
        </div>
      </div>

      <div className="pizza-container">
        <div className="pizza-info">
          <h2>Position Absulute Acı Pizza</h2>
          <div className="price-rate">
            <h3>85.50₺</h3>
            <p>4.9</p>
            <p>(200)</p>
          </div>
          <p>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>
        </div>
        <div className="pizza-size-paste">
          <div className="pizza-size">
            <h4>
              Boyut Seç<span className="require"> *</span>
            </h4>
            <input type="radio" />
            <label>Küçük</label>
            <br></br>
            <input type="radio" />
            <label>Orta</label>
            <br></br>
            <input type="radio" />
            <label>Büyük</label>
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
    </>
  )
}
export default OrderPizza
