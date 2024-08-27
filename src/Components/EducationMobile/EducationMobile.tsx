import React, { FunctionComponent, ReactNode } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Dates from '../Dates/Dates';
import { getMmYyyy } from '../../utils/utils-map';

interface OwnProps {
    major: string;
    minor: string;
    university: string;
    school: string;
    campusLoc: string;
    gradDate: string;
}

type Props = OwnProps;

const GridWrap = ({children}: { children: ReactNode }) => (<Grid item xs={12}>{children}</Grid>);

const EducationMobile: FunctionComponent<Props> = ({
                                                       major,
                                                       minor,
                                                       university,
                                                       school,
                                                       campusLoc,
                                                       gradDate,
                                                   }) => {

    const end = new Date(gradDate);
    const sx = {marginBottom : 2};
    return (
        <Box marginBlock={2}>
            <GridWrap> <Typography variant='h2'>{major}</Typography> </GridWrap>
            <GridWrap> <Typography variant='h3' sx={sx}>{minor}</Typography> </GridWrap>
            <GridWrap> <Typography variant='h3'>{university}</Typography> </GridWrap>
            <GridWrap> <Typography variant='h3'>{school}</Typography> </GridWrap>
            <GridWrap> <Typography variant='h3' sx={sx}>{campusLoc}</Typography> </GridWrap>
            <GridWrap> <Typography variant='h3'>{`Graduated ${getMmYyyy(end)}`}</Typography></GridWrap>
        </Box>
    );
};

export default EducationMobile;
