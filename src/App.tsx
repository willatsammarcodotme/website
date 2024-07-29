import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <meta name="viewport" content="initial-scale=1, width=device-width"/>

        <img src={logo} className="App-logo" alt="logo"/>
        <a href={"http://sammarco.me"}>sammarco.me</a>
      </header>
      <body>
      <CssBaseline />

      </body>
    </div>
  );
}

export default App;
