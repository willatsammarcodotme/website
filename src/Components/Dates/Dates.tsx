import React, { FunctionComponent } from 'react';
import { Typography } from '@mui/material';
import { getMmYyyy } from '../../utils/utils-map';
import { Variant } from '@mui/material/styles/createTypography';

export interface DatesProps {
    start?: Date,
    end?: Date,
    variant?: Variant
}

type Props = DatesProps;

const Dates: FunctionComponent<Props> = ({start, end, variant='h2'}) => {

    const datesRender = start === undefined
        ? getMmYyyy(end ?? new Date())
        : `${getMmYyyy(start)} - ${end ? getMmYyyy(end) : 'Present'}`;

    return (
        <Typography variant={variant}>
            {datesRender}
        </Typography>
    )
};

export default Dates;
