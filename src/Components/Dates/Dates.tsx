import React, { FunctionComponent } from 'react';
import { Typography } from '@mui/material';

const getMmYyyy = (date: Date) => `${date.getMonth() + 1}/${date.getFullYear()}`

interface OwnProps {
    start: Date,
    end?: Date,
}

type Props = OwnProps;

const Dates: FunctionComponent<Props> = ({start, end}) => (
    <Typography variant='h2'>
        {`${getMmYyyy(start)} - ${end ? getMmYyyy(end) : 'Present'}`}
    </Typography>
);

export default Dates;
