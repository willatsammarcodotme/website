import React, { FunctionComponent } from 'react';
import { Box, Grid, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import './PersonHeader.css';
import Contact, { ContactProps } from '../Contact/Contact';

interface OwnProps {
    fullName: string;
    contacts: ContactProps[],
}

const leftAlignMobile = (theme: Theme) => ({
    [theme.breakpoints.only('xs')] : {
        textAlign : 'left',
    }
})

type Props = OwnProps;

const PersonHeader: FunctionComponent<Props> = ({fullName, contacts}) => {

    const theme = useTheme();
    const leftAlign = leftAlignMobile(theme);

    const matchXs = useMediaQuery(theme.breakpoints.only('xs'));
    console.log('theme', theme.breakpoints);

    const sxFullName = matchXs ? {fontSize : '8vw'} : {};

    return (
        <Grid container className='personheader-wrapper' sx={{marginBottom : 1}}>
            <Grid item xs={12}><Typography variant='h1' sx={sxFullName}> {fullName}</Typography></Grid>
            {matchXs
                ? <Box sx={{marginBlock: 2}}>
                {contacts.map((contactProps) => (
                    <Grid key={contactProps.text} item xs={12} sx={leftAlign}>
                        <Contact {...contactProps} />
                    </Grid>
                ))}
                </Box>
                : <Grid item xs={12} sx={leftAlign}>
                    {contacts.map((contactProps) => (
                        <Contact key={contactProps.text} {...contactProps} />
                    ))}
                </Grid>
            }
        </Grid>
    );
};

export default PersonHeader;
