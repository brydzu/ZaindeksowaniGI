import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./Landingpage";
import Home from "./Home";
//import Aktualnosci from "./Aktualnosci";
//import About from "./About";
import List_of_products from "./List_of_products";
//import Historia from "./Historia";
//import Linki from "./Linki";
//import FAQ from "./FAQ";
//import Klakulatory from "./Kalkulatory";
//import Blog from "./Blog";

const Main = () => (
  <Switch>
    <Route exact path="/Home" component={Home} />
    <Route exact path="/" component={Home} />
    {/*}  <Route path="/Aktualnosci" component={Aktualnosci} />
    <Route path="/About" component={About} /> */}
    <Route path="/List_of_products" component={List_of_products} />
    {/*<Route path="/Historia" component={Historia} />
    <Route path="/Linki" component={Linki} />
    <Route path="/Produkt" component={Produkt} />
    <Route path="/FAQ" component={FAQ} />
    <Route path="/Kalkulatory" component={Kalkulatory} />
<Route path="/Blog" component={Blog} /> */}
  </Switch>
);

export default Main;
