import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/Product";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditPruduct";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact>
            <ProductList />
          </Route>
          <Route path="/add">
            <AddProduct />
          </Route>
          <Route path="/edit/:id">
            <EditProduct />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
