import { FunctionComponent } from 'react';
import { Grid, useTheme } from "@mui/material";

interface OwnProps {
    company: string;
    jobDescription: string;
    dates: { start: Date, end?: Date }
}

type Props = OwnProps;


const ResumeHeader: FunctionComponent<Props> = ({company, jobDescription, dates}) => {

    const theme = useTheme();

    return (
        <Grid
            container display='flex' className='resumeheader-wrapper' justifyContent='space-between' alignItems='center'
            textAlign='left'
        >
            <Grid item xs={12} sm={6} className='resumeheader-companyjd-wrapper'>
                <div className='resumeheader-company'>
                    {company}
                </div>
                <div className='resumeheader-jobdescription'>
                    {jobDescription}
                </div>
            </Grid>
            <Grid
                item xs={12} sm={6} className='resumeheader-dates'
                sx={{[theme.breakpoints.up("sm")] : {textAlign : 'right'}}}
            >
                {`${dates.start.getMonth() + 1}/${dates.start.getFullYear()}`}
                {dates.end && ` - ${dates.start.getMonth() + 1}/${dates.start.getFullYear()}`}
            </Grid>
        </Grid>
    );
};

export default ResumeHeader;
