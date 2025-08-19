import './App.css';
import React, { useState } from 'react'

import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Introduction from './Components/Introduction';


function App() {
  

  return (
    <>
      <Navbar title="Omega"/>
      <Introduction/>
      <Project/>
    </>
  );
}
export default App;
