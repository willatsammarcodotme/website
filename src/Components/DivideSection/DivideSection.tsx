import { FunctionComponent, ReactNode } from 'react';
import { Divider, Collapse, Typography,  } from '@mui/material';
import './DivideSection.css';

interface OwnProps {
    sectionName?: string;
    children?: ReactNode;
}

type Props = OwnProps;

const DivideSection: FunctionComponent<Props> = ({sectionName = '', children = null}) => {

    return <>
        <Divider flexItem textAlign='left' variant='fullWidth' className={sectionName ? '' : 'MuiDivider-unlabeled'}>
            <Typography variant='h2' sx={{textTransform: 'uppercase'}}>{sectionName}</Typography>
        </Divider>
        {children}
    </>;
};

export default DivideSection;
