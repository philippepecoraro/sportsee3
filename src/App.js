import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profil from "./pages/profil/Profil";
import HorizontalNavbar from "./components/HorizontalNavbar/HorizontalNavbar";
import Accueil from "./pages/accueil/Accueil";
import NotFound from "./components/NotFound/NotFound";
import EmptyPage from "./components/EmptyPage/EmptyPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HorizontalNavbar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Accueil />} />
          <Route path="/user/:id" element={<Profil />} />
          <Route path="/user/:id/activity" element={<Profil />} />
          <Route path="/user/:id/average-sessions" element={<Profil />} />
          <Route path="/user/:id/performance" element={<Profil />} />
          <Route path="/emptypageprofil" element={<EmptyPage />} />
          <Route path="/emptypagereglage" element={<EmptyPage />} />
          <Route path="/emptypagecommunaute" element={<EmptyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
