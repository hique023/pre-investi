import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Finish from "./components/Finish";
import NotFound from "./components/NotFound";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/finish" element={<Finish />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
