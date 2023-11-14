import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Dishes from "./components/Dishes";
import CartModal from "./components/CartModal";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="dishes">
          <Dishes />
        </div>
        <div id="about">
          <About />
        </div>
      </main>
      <CartModal />
      <Footer />
    </div>
  );
};

export default App;
