import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResumeHeader from "./Components/ResumeHeader/ResumeHeader";

function App() {
  return (
    <div className="App">
      <ResumeHeader
        company='company'
        jobDescription='jobDesccription'
        dates={{start: new Date(), end: new Date()}}
      />
    </div>
  );
}

export default App;
