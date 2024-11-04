import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
