import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayouts from "./components/SharedLayouts";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SharedLayouts />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
