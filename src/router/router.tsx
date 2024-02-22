import React, { BrowserRouter, Route, Routes } from "react-router-dom";
import Cancel from "../component/Cancel/Cancel";
import Main from "../App";

export function Rotas() {
      return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/cancel" element={<Cancel/>} />
        </Routes>
      </BrowserRouter>
    )
  }
  export default Rotas;