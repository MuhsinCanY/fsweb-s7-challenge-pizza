import React from "react";
import { Switch, Route } from 'react-router-dom'
import Home from "./pages/Home";
import OrderPizza from "./pages/OrderPizza";
import Success from "./pages/Success";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/pizza" exact>
          <OrderPizza />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Switch>
    </>
  )
};
export default App;
