import React from 'react';
import Photo from "./components/Photo";
import Card from './components/Card'

const App = () => {
  return (
    <>
      <div className="container">
        <Photo />
        <Card />
      </div>
    </>
  )
}

export default App