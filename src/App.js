import React from 'react';
import Photo from "./components/Photo";
import Card from './components/Card';
import Buttons from "./components/Buttons";
import Main from "./components/Main";

const App = () => {
  return (
    <>
      <div className="container">
        <Photo />
        <Card />
        <Buttons />
        <Main />
      </div>
    </>
  )
}

export default App