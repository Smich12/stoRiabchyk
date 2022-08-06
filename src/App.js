import { hot } from 'react-hot-loader/root';
import React from "react";
import "./App.css";
import { Body } from "./Components/Body/Body";

import { Header } from "./Components/Header/Header";
import { SliderComponent } from "./Components/Slider/Slider";

import { About_us } from "./Components/About_us/About_us";
import { Contacts } from "./Components/Contacts/Contacts";
import { Footer } from "./Components/Footer/Footer";
import { Title } from "./Components/Title/Title";
import  MapContainer  from "./Components/GoogleMaps/MyMap";

function App() {
  return (
    <div className="App">
      <div className="main main-screen">
        <Header />
        <Title />
        <SliderComponent />
        <Body />
        <About_us />
        {/*<div style={{backgroundColor: 'silver', width: '80%', margin: '0 auto'}}>*/}
        <MapContainer/>
        {/*</div>*/}
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}


export default hot(App);
