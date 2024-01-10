import React from 'react'
import './OrderPizza.css'
import PizzaTitle from '../components/PizzaTitle/PizzaTitle.jsx'
import PizzaInfo from '../components/PizzaInfo/PizzaInfo.jsx'
import PizzaForm from '../components/PizzaForm/PizzaForm'


const OrderPizza = () => {

  return (
    <>
      <PizzaTitle />
      <div className="pizza-container">
        <div className="pizza-content">
          <PizzaInfo />
          <PizzaForm />
        </div>
      </div>
    </>
  )
}
export default OrderPizza
