import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { animals } from "./animalsList";
import CardsDisplay from "./components/CardsDisplay";

function App() {
  console.log(animals);

  return (
    <>
      <Header />
      <CardsDisplay />
      <Footer />
    </>
  );
}

export default App;
