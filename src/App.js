import React from 'react';
import Photo from "./components/Photo";
import Card from './components/Card';
import Buttons from "./components/Buttons";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="container">
        <Photo />
        <Card />
        <Buttons />
        <Main />
        <Footer />
      </div>
    </>
  )
}

export default App