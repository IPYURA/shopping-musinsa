import "./App.css";
import { useState, useEffect } from "react";
//useEffect로 State값이 무엇인지에 따라 바뀌게 만들어줌
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductAll from "./pages/ProductAll";
import Login from "./pages/Login";
import ProductDetail from "./pages/ProductDetail";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  const [authenticate, setAutenticate] = useState(false);
  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

  return (
    <div className="App">
      <Navbar authenticate={authenticate} setAutenticate={setAutenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAutenticate={setAutenticate} />}
        />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>} />
      </Routes>
    </div>
  );
}

export default App;
