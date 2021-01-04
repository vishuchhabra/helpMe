import React from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";


function App() {
  return (
    <div>
      <Header />
      <div className="body">
      <Home></Home>
      </div>
      <Footer />
    </div>
  );
}

export default App;
