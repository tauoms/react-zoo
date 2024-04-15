import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardsDisplay from "./components/CardsDisplay";

function App() {
  return (
    <>
      <Header />
      <CardsDisplay />
      <Footer />
    </>
  );
}

export default App;
