import { FunctionComponent } from 'react';
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Dates from '../Dates/Dates';

export interface CompanyHeaderProps {
    company: string;
    jobTitle: string;
    dates: { start: Date, end?: Date }
}

type Props = CompanyHeaderProps;


const CompanyHeader: FunctionComponent<Props> = ({company, jobTitle, dates}) => {

    const theme = useTheme();
    const matchXs = useMediaQuery(theme.breakpoints.only('xs'));

    return (
        <Grid
            container display='flex' className='resumeheader-wrapper' justifyContent='space-between' alignItems='center'
            marginTop={1}
            textAlign='left'
        >
            <Grid item xs={12} sm={6} className='resumeheader-companyjd-wrapper'>
                <Typography variant='h2' className='resumeheader-company'>
                    {company}
                </Typography>
                {matchXs && <Dates {...dates} />}
                <Typography variant='h3' className='resumeheader-jobtitle'>
                    {jobTitle}
                </Typography>
            </Grid>
            {!matchXs &&
                <Grid
                item
                sm={6}
                className='resumeheader-dates'
                sx={{[theme.breakpoints.up("sm")] : {textAlign : 'right'}}}
            >
                <Dates {...dates} />
            </Grid>
            }
        </Grid>
    );
};

export default CompanyHeader;
