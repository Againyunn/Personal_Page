import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import MenuActivated from "./pages/MenuActivated";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<MainPage />} />
        <Route path="MenuActivated/" element={<MenuActivated />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
