import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ResumeHeader from "./Components/ResumeHeader/ResumeHeader";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const theme = createTheme({
    typography : {
        fontFamily : `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
    },
});

function App () {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <ResumeHeader
                    company='company'
                    jobDescription='jobDesccription'
                    dates={{start : new Date(), end : new Date()}}
                />
            </ThemeProvider>
        </div>
    );
}

export default App;
