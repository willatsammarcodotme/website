import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CompanyHeader from "./Components/CompanyHeader/CompanyHeader";
import Fab from '@mui/material/Fab';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box, ThemeProvider } from "@mui/material";
import PersonHeader from "./Components/PersonHeader/PersonHeader";
import DivideSection from './Components/DivideSection/DivideSection';
import Company from './Components/Company/Company';
import { theme } from './theme/theme'
import Skills from './Components/Skills/Skills';
import Summary from './Components/Summary/Summary';
import { contacts, skillItems, workItems } from './const/resume-items';

function App () {

    return (<div className="App">
        <ThemeProvider theme={theme}>
            <Box padding={1}>
            <PersonHeader
                fullName='William Sammarco'
                contacts={contacts}
            />
            <DivideSection>
                <Summary targetTitle='Lead Software Engineer'>
                    Experienced technical lead building scalable solutions across many industries in 11 years of
                    software
                    development. Effectve leader, demonstrator, communicator. Collaborative team player with steady
                    accountable growth. Expert in React, .NET, ASP, C#, HTML5 and many JavaScript frameworks.
                </Summary>
            </DivideSection>
            <DivideSection sectionName={'Skills'}>
                <Skills skillItems={skillItems} />
            </DivideSection>
            <DivideSection sectionName={'Work Experience'}>

                {workItems.map(({header, achievements}) => (<Company
                    companyHeaderProps={header}
                    achievements={achievements}
                />))}


            </DivideSection>
            <DivideSection sectionName='education'>
                <Box textAlign='left'>
                    <CompanyHeader
                        company='B.S. in Computer Science, Minor in Economics'
                        jobTitle='University Of Illinois, College of Engineering - Chicago, Illinois'
                        dates={{end : new Date('8/1/2010')}}
                    />
                </Box>
            </DivideSection>
            <Fab color='primary' aria-label="download" sx={{position : 'fixed', bottom: '24px', right: '24px'}}>
                <a href='william_sammarco.pdf' target='_blank'><FileDownloadIcon htmlColor='white'/></a>
            </Fab>
            </Box>
        </ThemeProvider>
    </div>
    );
}

export default App;
