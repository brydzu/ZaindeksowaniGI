import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./Landingpage";
import Home from "./Home";
import Informacje from "./Informacje";
import Linki from "./Linki";
import List_of_products from "./List_of_products";
import Przepisy from "./Przepisy";
import Kontakt from "./Kontakt";
import Insulinoopornosc from "./Insulinoopornosc";
import Kalkulatory from "./Kalkulatory.js";
//import Klakulatory from "./Kalkulatory";
//import Blog from "./Blog";

const Main = () => (
  <Switch>
    <Route exact path="/Home" component={Home} />
    <Route exact path="/" component={Home} />
    {/*}  <Route path="/Aktualnosci" component={Aktualnosci} />
    <Route path="/About" component={About} /> */}
    <Route path="/List_of_products" component={List_of_products} />
    <Route path="/Przepisy" component={Przepisy} />
    <Route path="/Linki" component={Linki} />
    <Route path="/Informacje" component={Informacje} />
    <Route path="/Kontakt" component={Kontakt} />
    <Route path="/Insulinoopornosc" component={Insulinoopornosc} />
    <Route path="/Kalkulatory" component={Kalkulatory} />
    {/*<Route path="/Linki" component={Linki} />
    <Route path="/Produkt" component={Produkt} />
    <Route path="/FAQ" component={FAQ} />
    <Route path="/Kalkulatory" component={Kalkulatory} />
<Route path="/Blog" component={Blog} /> */}
  </Switch>
);

export default Main;
