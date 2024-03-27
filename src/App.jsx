import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import DiscoverMovies from "./components/discover-movies/discover-movies";
import AuthModal from "./components/modal/auth-modal";
import { useModalProvider } from "./context/modal-context";

function App() {
  const { isOpen } = useModalProvider();
  return (
    <>
      {isOpen && <AuthModal />}

      <div className="app-container">
        <Navbar />
        <main>
          <Home />
          <DiscoverMovies />
        </main>
      </div>
    </>
  );
}

export default App;
