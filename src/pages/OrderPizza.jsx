import React, { useEffect, useState } from 'react'
import './OrderPizza.css'
import PizzaTitle from '../components/PizzaTitle/PizzaTitle.jsx'
import PizzaInfo from '../components/PizzaInfo/PizzaInfo.jsx'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

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

const initialValues = {
  size: '',
  paste: '',
  material: [],
  name: '',
  note: '',
  count: 1,
}

const OrderPizza = () => {
  const history = useHistory()

  const [formData, setFormData] = useState(initialValues)
  const [count, setCount] = useState(1)
  const totalPrice = formData.material.length * 5 + count * 85.5

  const handleCountChange = (e) => {
    const { name } = e.target
    e.preventDefault()
    console.log(e.target)
    if (name === 'plus') {
      setCount(count + 1)
      setFormData({ ...formData, 'count': count + 1 })
    } else {
      if (count > 1) {
        setCount(count - 1)
        setFormData({ ...formData, 'count': count + 1 })
      }
    }
  }

  useEffect(() => {}, [count])

  const handleChange = (e) => {
    let { name, value, checked } = e.target
    console.log(value)
    console.log(name)
    console.log(formData)

    if (name === 'size') {
      setFormData({ ...formData, [name]: value })
    }

    if (name === 'paste') {
      setFormData({ ...formData, [name]: value })
    }

    if (name === 'material') {
      const newObj = formData
      if (checked) {
        newObj.material.push(value)
      } else {
        const index = newObj.material.indexOf(value)
        newObj.material.splice(index, 1)
      }

      setFormData({ ...newObj })
    }

    if (name === 'name') {
      setFormData({ ...formData, [name]: value })
    }

    if (name === 'note') {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push('/success')
  }

  return (
    <>
      <PizzaTitle />
      <div className="pizza-container">
        <div className="pizza-content">
          <PizzaInfo />
          <form id="pizza-form" onSubmit={handleSubmit}>
            <div className="pizza-size-paste">
              <div className="pizza-size">
                <h4>
                  Boyut Seç<span className="require"> *</span>
                </h4>
                <div className="size">
                  <label id="kucuk">
                    <input
                      type="radio"
                      name="size"
                      id="size-radio"
                      value="Küçük"
                      onChange={handleChange}
                    />{' '}
                    Küçük
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      id="size-radio"
                      value="Orta"
                      onChange={handleChange}
                    />
                    {'  '}Orta
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="size"
                      id="size-radio"
                      value="Büyük"
                      onChange={handleChange}
                    />
                    {'  '}Büyük
                  </label>
                </div>
              </div>
              <div className="pizza-paste">
                <h4>
                  Hamur Seç<span className="require"> *</span>
                </h4>
                <select
                  name="paste"
                  value={formData.paste}
                  onChange={handleChange}
                >
                  <option hidden defaultValue>
                    Hamur Kalınlığı
                  </option>
                  <option value="İnce">İnce</option>
                  <option value="Normal">Normal</option>
                  <option value="Kalın">Kalın</option>
                </select>
              </div>
            </div>
            <div className="pizza-extra-material">
              <h3>Ek Malzemeler</h3>
              <p>En fazla 10 malzeme saçiniz. 5₺</p>
              <div className="pizza-material-checkboxs">
                {materials.map((m) => {
                  return (
                    <div
                      key={m}
                      className="pizza-material"
                      id="malzemeler-checkbox"
                    >
                      <label>
                        <input
                          type="checkbox"
                          name="material"
                          value={m}
                          onClick={handleChange}
                        />{' '}
                        {m}
                      </label>
                    </div>
                  )
                })}
              </div>
            </div>
            <br></br>
            <h3 id="name-input-label">İsim</h3>
            <input
              type="textarea"
              name="name"
              id="name-input"
              placeholder="Adınız..."
              onChange={handleChange}
            />
            <div className="pizza-order-note">
              <h3>Sipariş Notu</h3>
              <input
                type="textarea"
                name="note"
                placeholder="Siparişinize eklemek istediğiniz bir not varmı?"
                onChange={handleChange}
              />
            </div>
            <div className="divider"></div>
            <hr></hr>
            <div className="pizza-order">
              <div className="pizza-order-quantity">
                <button name="minus" onClick={handleCountChange}>
                  -
                </button>
                <p>{count}</p>
                <button name="plus" onClick={handleCountChange}>
                  +
                </button>
              </div>
              <div className="pizza-price-result">
                <h3>Sipariş Toplam</h3>
                <div className="price-descriptions">
                  <div className="description">
                    <p>Seçimler</p>
                    <p>{formData.material.length * 5}.00₺</p>
                  </div>
                  <div className="description result">
                    <p>Toplam</p>
                    <p>{totalPrice}₺</p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="pizza-order-button"
                  id="order-button"
                >
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default OrderPizza
