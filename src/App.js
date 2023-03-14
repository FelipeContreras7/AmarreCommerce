
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from './components/Slider/Slider';
import Destacados from "./components/Destacados/Destacados";
import tarjetas from  "./services/api.json"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Slider/>
      <Destacados tarjetas={tarjetas}/>
    </BrowserRouter>
  );
}

export default App;
