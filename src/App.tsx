// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NftDetails from "./pages/NftDetails";

function App() {
  return (
    <div className="bg-[#141625] overflow-x-auto w-full h-full text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/nft-market/" element={<Home />} />
          <Route path="/nft-market/:id" element={<NftDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
