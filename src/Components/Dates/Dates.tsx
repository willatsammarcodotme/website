import React, { FunctionComponent } from 'react';
import { Typography } from '@mui/material';

const getMmYyyy = (date: Date) => `${date.getMonth() + 1}/${date.getFullYear()}`

export interface DatesProps {
    start?: Date,
    end?: Date,
}

type Props = DatesProps;

const Dates: FunctionComponent<Props> = ({start, end}) => {

    const datesRender = start === undefined
        ? getMmYyyy(end ?? new Date())
        : `${getMmYyyy(start)} - ${end ? getMmYyyy(end) : 'Present'}`;

    return (
        <Typography variant='h2'>
            {datesRender}
        </Typography>
    )
};

export default Dates;
