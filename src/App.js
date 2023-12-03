import logo from './logo.svg';
import './App.css';
import DogDetails from './DogDetails';
import DogList from './DogList';
import whiskey from './whiskey.jpg';
import perry from './perry.jpg';
import duke from './duke.jpg';
import ColorList from './ColorList';
import ColorForm from './ColorForm';
import ColorInfo from './ColorInfo';
import React, { useState } from 'react';

import { Route, BrowserRouter, Navigate, Routes } from "react-router-dom";


function App({dogs}) {
  const INITIAL_COLORS = [{name: "black",code: "#000000"}];
  const [colors, setColors] = useState(INITIAL_COLORS);

  const addColor = (data) => {
      setColors([data, ...colors]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/colors"  element={<ColorList colors={colors}/>} />
          <Route exact path="/colors/new" element={<ColorForm addColor={addColor}/>}/>
          <Route path="/colors/:name" element={<ColorInfo colors={colors}/>} />
          <Route exact path="/dogs"  element={<DogList dogs={dogs}/>} />
          <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>} />
          <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    }
  ]
};

export default App;
