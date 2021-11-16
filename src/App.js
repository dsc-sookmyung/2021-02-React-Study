import "./App.css";
import React from "react";
import Header from "./inflearnComponent/Header";
import ImgSlider from "./inflearnComponent/ImgSlider";
import Cards from "./inflearnComponent/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginModal from "./inflearnComponent/LoginModal";

function App() {

  return (
    <div>
      <Header></Header>
      <ImgSlider></ImgSlider>
      <Cards></Cards>
      <LoginModal></LoginModal>
    </div>
  );
}

export default App;