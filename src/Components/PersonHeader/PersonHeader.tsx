import React, { FunctionComponent } from 'react';
import { Grid, Theme, useTheme, useMediaQuery, Typography } from "@mui/material";
import './PersonHeader.css';

interface OwnProps {
    fullName: string;
    contacts: string[],
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

const sxFullName = matchXs ? {fontSize: '8vw'} : {};

    return (
        <Grid container className='personheader-wrapper' sx={{marginBottom: 1}}>
            <Grid item xs={12} ><Typography variant='h1' sx={sxFullName}> {fullName}</Typography></Grid>
            {matchXs
                ? contacts.map((cntct) => (
                <Grid key={cntct} item xs={12}>
                    {cntct}
                </Grid>
            ))
                :
                    <Grid item xs={12} sx={leftAlign}>
                        {contacts.map(cntct => <span>{cntct}</span>)}
                    </Grid>}


        </Grid>
    );
};

export default PersonHeader;
