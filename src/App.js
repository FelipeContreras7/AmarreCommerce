
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from './components/Slider/Slider';
import Destacados from "./components/Destacados/Destacados";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Slider/>
      <Destacados/>
    </BrowserRouter>
  );
}

export default App;
