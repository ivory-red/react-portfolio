import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-portfolio" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;