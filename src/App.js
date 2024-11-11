import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import Products from "./components/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
