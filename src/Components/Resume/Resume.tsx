import React from 'react';
import PersonHeader from '../PersonHeader/PersonHeader';
import { Box, useMediaQuery } from '@mui/material';
import { theme } from '../../theme/theme';
import {
    campusLoc,
    contacts,
    gradDate,
    major,
    minor,
    school,
    skillItems,
    summaryText,
    university,
    workItems
} from '../../const/resume-items';
import DivideSection from '../DivideSection/DivideSection';
import Summary from '../Summary/Summary';
import Skills from '../Skills/Skills';
import Company from '../Company/Company';
import CompanyHeader from '../CompanyHeader/CompanyHeader';
import EducationMobile from '../EducationMobile/EducationMobile';
import Fab from '@mui/material/Fab';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


const Resume = () => {
    const matchMdUp = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <>
            <PersonHeader
                fullName='William Sammarco'
                contacts={contacts}
            />
            <DivideSection>
                <Summary targetTitle='Lead Software Engineer'>
                    {summaryText}
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
                    {matchMdUp
                        ? <CompanyHeader
                            company={`${major}, ${minor}`}
                            jobTitle={`${university}, ${school} - ${campusLoc}`}
                            dates={{end : new Date(gradDate)}}

                        /> : <EducationMobile
                            major={major}
                            minor={minor}
                            university={university}
                            school={school}
                            campusLoc={campusLoc}
                            gradDate={gradDate}
                        />
                    }
                </Box>
            </DivideSection>
            <Fab color='primary' aria-label="download" sx={{position : 'fixed', bottom : '24px', right : '24px'}}>
                <a href='william_sammarco.pdf' target='_blank'><FileDownloadIcon htmlColor='white' /></a>
            </Fab>
        </>
    );
}

export default Resume;
