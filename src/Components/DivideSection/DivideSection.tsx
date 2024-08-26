import { FunctionComponent, ReactNode } from 'react';
import { Divider, Collapse, Typography } from '@mui/material';

interface OwnProps {
    sectionName?: string;
    children?: ReactNode;
}

type Props = OwnProps;

const DivideSection: FunctionComponent<Props> = ({sectionName = '', children = null}) => {

    return <>
        <Divider flexItem textAlign='left'>
            <Typography variant='h2' sx={{textTransform: 'uppercase'}}>{sectionName}</Typography>
        </Divider>
        {children}
    </>;
};

export default DivideSection;
