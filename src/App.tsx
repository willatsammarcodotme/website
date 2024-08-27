import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, ThemeProvider, useMediaQuery } from "@mui/material";
import { theme } from './theme/theme'
import Resume from './Components/Resume/Resume';

function App () {

    return (<div className="App">
            <ThemeProvider theme={theme}>
                <Box padding={1}>
                    <Resume />
                </Box>
            </ThemeProvider>
        </div>
    );
}

export default App;
