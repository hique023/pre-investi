import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Inscricao from "./components/Inscricao";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/inscricao" element={<Inscricao />} />
      </Routes>
    </BrowserRouter>
  );
}
