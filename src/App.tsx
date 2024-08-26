import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CompanyHeader from "./Components/CompanyHeader/CompanyHeader";
import { createTheme, ThemeProvider } from "@mui/material";
import PersonHeader from "./Components/PersonHeader/PersonHeader";

const theme = createTheme({
    typography : {
        fontFamily : `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
        h1: {color: '#2427AB', fontSize: '4rem'}
    },
});

const contacts = [
    '773-302-6027',
    'will@sammarco.me',
    'linkedin.com/in/williamsammarco'
];

function App () {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <PersonHeader
                    fullName='William Sammarco'
                    contacts={contacts}
                />
                <CompanyHeader
                    company='company'
                    jobDescription='jobDesccription'
                    dates={{start : new Date(), end : new Date()}}
                />
            </ThemeProvider>
        </div>
    );
}

export default App;
