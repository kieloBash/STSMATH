import Home from "./pages/Home";
import Derivatives from "./pages/Derivatives";
import AntiDerivatives from "./pages/AntiDerivatives";
import Conic from "./pages/Conic";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App w-screen h-screen bg-gradient-to-b from-black via-black to-blue-900">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/derivatives" element={<Derivatives />}></Route>
          <Route path="/antiderivatives" element={<AntiDerivatives />}></Route>
          <Route path="/conic" element={<Conic />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
