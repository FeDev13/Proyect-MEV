import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Register from "./Components/Register";
import Deptos from "./Components/Deptos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/departamentos" element={<Deptos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
