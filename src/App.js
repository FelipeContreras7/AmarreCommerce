
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from './components/Slider/Slider';
import Destacados from "./components/Destacados/Destacados";
import tarjetas from  "./services/destacados.json"
import Banner from "./components/BannerProductos/Banner";
import Intro from "./components/Intro/Intro";
import intro from "./services/intro.json";
import categ1 from "./services/categorias.json";
import categ2 from "./services/categorias1.json";
import categ3 from "./services/categorias2.json";
import categ4 from "./services/categorias3.json";
import Masvendidos from "./components/MasVendidos/MasVendidos";
import Footer from "./components/Footer/Footer";
import collares from "./services/mvcollares.json";
import pulseras from "./services/mvpulseras.json";
import aritos from "./services/mvaritos.json";
import straps from "./services/mvstraps.json";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Slider/>
      <Intro intro={intro}/>
      <Destacados tarjetas={tarjetas}/>
      <Banner categ={categ1}/>
      <Masvendidos tarjetas={collares}/>
      <Banner categ={categ2}/>
      <Masvendidos tarjetas={pulseras}/>
      <Banner categ={categ3}/>
      <Masvendidos tarjetas={aritos}/>
      <Banner categ={categ4}/>
      <Masvendidos tarjetas={straps}/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
