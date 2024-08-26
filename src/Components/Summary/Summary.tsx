import React, { FunctionComponent, ReactNode } from 'react';
import { Box, Typography } from '@mui/material';

interface OwnProps {
    targetTitle: string,
    children: ReactNode,
}

type Props = OwnProps;

const Summary: FunctionComponent<Props> = ({targetTitle, children}) => {

    return (
        <Box textAlign='left' marginBottom={2}>
            <Typography variant='h2' marginBlock={3}>
                {targetTitle}
            </Typography>
            <Box>
                {children}
            </Box>
        </Box>
    );
};

export default Summary;
