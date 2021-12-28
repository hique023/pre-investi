import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Finish from "./components/Finish";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/finish" element={<Finish />} />
      </Routes>
    </BrowserRouter>
  );
}
