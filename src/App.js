import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import CardView from "./CardView";
import { SlideView } from "./SlideView";

function App() {
  return (
    <div>
      <Header />
      <SlideView />
      <CardView />
    </div>
  );
}

export default App;
