
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Slider from './components/Slider/Slider';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Slider/>
    </BrowserRouter>
  );
}

export default App;
