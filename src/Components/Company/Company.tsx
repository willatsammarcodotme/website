import React, { FunctionComponent } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import CompanyHeader, { CompanyHeaderProps } from '../CompanyHeader/CompanyHeader';

interface OwnProps {
    companyHeaderProps: CompanyHeaderProps;
    achievements: string[];
}

type Props = OwnProps;

const Company: FunctionComponent<Props> = ({companyHeaderProps, achievements}) => {

    return <>
        <CompanyHeader {...companyHeaderProps} />
        <List sx={{width : '100%'}}>
            {achievements.map((a) => (<ListItem
                    key={a}
                    disableGutters
                >
                    <ListItemIcon>
                        <CircleIcon fontSize='inherit' />
                    </ListItemIcon>
                    <ListItemText primary={a} sx={{marginTop : -1}} />
                </ListItem>))}
        </List>
    </>;
};

export default Company;
