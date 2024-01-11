import React, { useEffect, useState } from 'react'
import './PizzaForm.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'

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

const initialErrors = {
  name: true,
  material: true,
  size: false,
  paste: false,
}

const PizzaForm = () => {
  const history = useHistory()
  const [formData, setFormData] = useState(initialValues)
  const [count, setCount] = useState(1)
  const [errors, setErrors] = useState(initialErrors)
  const [isValid, setIsValid] = useState(false)

  const totalPrice = formData.material.length * 5 + count * 85.5

  const handleCountChange = (e) => {
    const { name } = e.target
    e.preventDefault()
    if (name === 'plus') {
      setCount(count + 1)
      setFormData({ ...formData, count: count + 1 })
    } else {
      if (count > 1) {
        setCount(count - 1)
        setFormData({ ...formData, count: count + 1 })
      }
    }
  }

  useEffect(() => {
    if (!errors.name && !errors.material && errors.paste && errors.size) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [formData])

  const handleChange = (e) => {
    let { name, value, checked } = e.target

    if (name === 'size') {
      setFormData({ ...formData, [name]: value })
      setErrors({ ...errors, [name]: true })
    }

    if (name === 'paste') {
      setFormData({ ...formData, [name]: value })
      setErrors({ ...errors, [name]: true })
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
      if (newObj.material.length < 4 || newObj.material.length > 10) {
        setErrors({ ...errors, [name]: true })
        console.log(errors)
      } else {
        setErrors({ ...errors, [name]: false })
        console.log('1else', errors)
      }
    }

    if (name === 'name') {
      setFormData({ ...formData, [name]: value })
      if (value.length < 2) {
        setErrors({ ...errors, [name]: true })
      } else {
        setErrors({ ...errors, [name]: false })
      }
    }

    if (name === 'note') {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://reqres.in/api/users', formData)
      .then(function (response) {
        console.log(response.data)
        history.push('/success')
      })
      .catch(function (error) {
        console.log(error)
      })
    
  }

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <section className="pizza-size-paste">
        <div className="pizza-size">
          <h4>
            Boyut Seç<span className="require"> *</span>
          </h4>
          <div className="size">
            <label id="kucuk">
              <input
                type="radio"
                name="size"
                isim="S"
                id="size-radio"
                value="Küçük"
                onChange={handleChange}
              />{' '}
              {/* Küçük */}
            </label>
            <label>
              <input
                type="radio"
                name="size"
                isim="M"
                id="size-radio"
                value="Orta"
                onChange={handleChange}
              />
              {/* {'  '}Orta */}
            </label>
            <label>
              <input
                type="radio"
                name="size"
                isim="L"
                id="size-radio"
                value="Büyük"
                onChange={handleChange}
              />
              {/* {'  '}Büyük */}
            </label>
          </div>
          {!errors.size && <p className="formFeedback">Bu alan zorunludur.</p>}
        </div>
        <div className="pizza-paste">
          <h4>
            Hamur Seç<span className="require"> *</span>
          </h4>
          <select name="paste" value={formData.paste} onChange={handleChange}>
            <option hidden defaultValue>
              Hamur Kalınlığı
            </option>
            <option value="İnce">İnce</option>
            <option value="Normal">Normal</option>
            <option value="Kalın">Kalın</option>
          </select>
          {
            <p className="formFeedback" hidden={errors.paste}>
              Bu alan zorunludur.
            </p>
          }
        </div>
      </section>
      <section className="pizza-extra-material">
        <h3>Ek Malzemeler</h3>
        <p>En fazla 10 malzeme saçiniz. 5₺</p>

        <div className="pizza-material-checkboxs">
          {materials.map((m) => {
            return (
              <div key={m} className="pizza-material" id="malzemeler-checkbox">
                <label>
                  <input
                    type="checkbox"
                    name="material"
                    value={m}
                    data-cy={m}
                    onClick={handleChange}
                  />{' '}
                  {m}
                </label>
              </div>
            )
          })}
        </div>
        {errors.material && (
          <p className="formFeedback">
            En az 4, en fazla 10 malzeme seçebilirsin.
          </p>
        )}
        <br></br>
      </section>
      <section className="pizza-user-name">
        <h3 id="name-input-label">İsim</h3>
        <input
          type="textarea"
          name="name"
          id="name-input"
          placeholder="Adınız..."
          onChange={handleChange}
        />
        {errors.name && (
          <p className="formFeedback">İsim en az 2 karakter olmalıdır</p>
        )}
      </section>
      <section className="pizza-order-note">
        <h3>Sipariş Notu</h3>
        <input
          type="textarea"
          name="note"
          placeholder="Siparişinize eklemek istediğiniz bir not varmı?"
          onChange={handleChange}
        />
      </section>
      <div className="divider"></div>
      <hr></hr>
      <section className="pizza-order">
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
            disabled={!isValid}
          >
            SİPARİŞ VER
          </button>
        </div>
      </section>
    </form>
  )
}

export default PizzaForm
