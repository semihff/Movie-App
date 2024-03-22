import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import DiscoverMovies from "./components/discover-movies/discover-movies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Home />
        <DiscoverMovies />
      </main>
    </div>
  );
}

export default App;
