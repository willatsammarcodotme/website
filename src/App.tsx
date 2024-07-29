import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from "@mui/material";
import Main from "./Components/Main";

function App() {
  return (
    <div className='App'>
      <a href={"http://sammarco.me"}>sammarco.me</a>
      <CssBaseline/>
      <Main/>
    </div>
  );
}

export default App;
