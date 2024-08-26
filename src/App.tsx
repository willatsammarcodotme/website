import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CompanyHeader from "./Components/CompanyHeader/CompanyHeader";
import { createTheme, ThemeProvider } from "@mui/material";
import PersonHeader from "./Components/PersonHeader/PersonHeader";
import DivideSection from './Components/DivideSection/DivideSection';
import { lighten } from '@mui/material/styles'
import Company from './Components/Company/Company';


const primaryBlue = '#2427AB'
const dividerLineBlue = lighten(primaryBlue, 0.8);

const theme = createTheme({
    typography : {

        fontFamily : `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
        h1 : {color : primaryBlue, fontSize : '2.5rem', fontWeight : 500},
        h2 : {fontSize : '1rem', fontWeight : 500},
        h3 : {fontSize : '1rem', },
        h4 : {fontSize : '1rem', },
        h5 : {fontSize : '1rem', },
        h6 : {fontSize : '1rem', },
        // h3 : {fontSize : '1.5rem', fontWeight : 500},
    },
    components : {
        MuiDivider : {
            styleOverrides : {

                root : () => ({
                    // use JavaScript conditional expression
                    color : primaryBlue,
                    '&::before' : {
                        width : 0,
                    },
                    '&::after' : {
                        borderColor : dividerLineBlue,
                    },
                }),
                wrapper : () => ({paddingBottom : '6px', paddingLeft : 0})
            },
        },
        MuiListItemIcon : {
            styleOverrides : {
                root : () => ({
                    minWidth: 'unset',
                    alignSelf: 'baseline',
                    marginRight: '6px',
                    fontSize : '0.5rem',
                })
            }},
        },
    });

const contacts = [
    '773-302-6027',
    'will@sammarco.me',
    'linkedin.com/in/williamsammarco'
];

const achievements = [
    'Led a team of 8 front-end developers, collaborated with lead engineers and POs in building compex inventory management scheduling software written in TypeScript React with Vite.',
    'Led a team of 8 front-end developers, collaborated with lead engineers and POs in building compex inventory management scheduling software written in TypeScript React with Vite.',
    'Led a team of 8 front-end developers, collaborated with lead engineers and POs in building compex inventory management scheduling software written in TypeScript React with Vite.',
];

function App () {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <PersonHeader
                    fullName='William Sammarco'
                    contacts={contacts}
                />
                <DivideSection sectionName={'Work Experience'}>
                    <Company companyHeaderProps= {{
                        company: 'company',
                        jobTitle: 'jobDesccription',
                        dates: {start : new Date(),},
                    }} achievements={achievements} />

                </DivideSection>

            </ThemeProvider>
        </div>
    );
}

export default App;
