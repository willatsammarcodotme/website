import { createElement, FunctionComponent, FC } from 'react';
import { Box, IconProps, Link, useTheme, } from '@mui/material';

export interface ContactProps {
    text: string,
    icon: FC,
    hrefProtocol: string,
}

type Props = ContactProps;

const Contact: FunctionComponent<Props> = ({text, icon, hrefProtocol}) => {

    const theme = useTheme();

    const iconStyle = {
        color : theme.palette.secondary.light,
        marginRight : 0.5,
    }

    return (
        <Link href={hrefProtocol + text} underline='hover' sx={{marginRight: 2, color: theme.palette.secondary.light, padding: '2px'}}>
            <Box display='inline-flex' alignItems='flex-end'>
                {createElement(icon as FunctionComponent<IconProps>, {sx : iconStyle})}
                <div>{text}</div>
            </Box>
        </Link>
    );
};

export default Contact;
