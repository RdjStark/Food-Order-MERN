import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/NavigationBar/NavBar";
import Menu from "./components/Menu/Meals/Meals";
import Orders from "./components/Orders/Orders";
import HomePage from "./components/index";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <br/>
        <Route path="/" exact component={HomePage} />
        <Route path="/menu" component={Menu} />
        <Route path="/orders" component={Orders} />
      </div>
    </Router>
  );
}

export default App;
