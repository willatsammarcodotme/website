import { FunctionComponent } from 'react';
import { Breakpoint, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Dates, { DatesProps } from '../Dates/Dates';

export interface CompanyHeaderProps {
    company: string;
    jobTitle: string;
    dates: DatesProps;
    breakpoint?: Breakpoint,
}

type Props = CompanyHeaderProps;


const CompanyHeader: FunctionComponent<Props> = ({company, jobTitle, dates, breakpoint = 'sm'}) => {

    const theme = useTheme();
    const matchXs = useMediaQuery(theme.breakpoints.only('xs'));

    return (<Grid
            container display='flex' className='resumeheader-wrapper' justifyContent='space-between' alignItems='center'
            marginTop={1}
            textAlign='left'
        >
            <Grid
                item
                xs={12}
                {...{[breakpoint] : 9}}
                className='resumeheader-companyjd-wrapper'
            >
                <Typography variant='h2' className='resumeheader-company'>
                    {company}
                </Typography>
                {matchXs && <Dates {...dates} variant='h3' />}
                <Typography variant='h3' className='resumeheader-jobtitle'>
                    {jobTitle}
                </Typography>
            </Grid>
            {!matchXs && <Grid
                item
                {...{[breakpoint] : 3}}
                className='resumeheader-dates'
                sx={{[theme.breakpoints.up("sm")] : {textAlign : 'right'}}}
            >
                <Dates {...dates} />
            </Grid>}
        </Grid>);
};

export default CompanyHeader;
