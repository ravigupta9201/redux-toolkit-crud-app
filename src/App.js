import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import View from "./components/View";
import Update from "./components/Update";

const App = () => {
  return (
    // <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>

    // </div>
  );
};

export default App;
