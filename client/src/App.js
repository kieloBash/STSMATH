import Home from "./pages/Home";
import Derivatives from "./pages/Derivatives";
import AntiDerivatives from "./pages/AntiDerivativesPages/AntiDerivatives";
import Conic from "./pages/Conic";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
function App() {
  return (
    <div className="App w-screen h-screen bg-gradient-to-b from-black via-black to-blue-900">
       <BrowserRouter>
        <Routes>
          <Route path="/STSMATH" element={<Home />}></Route>
          <Route path="/STSMATH/derivatives" element={<Derivatives />}></Route>
          <Route path="/STSMATH/antiderivatives" element={<AntiDerivatives />}></Route>
          <Route path="/conic" element={<Conic />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
