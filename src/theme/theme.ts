import { createTheme, darken } from '@mui/material';
import { lighten } from '@mui/material/styles';

export const primaryBlue = '#2427AB';
export const primaryBlueLight = lighten(primaryBlue, 0.2);
export const primaryBlueDark = darken(primaryBlue, 0.2);

export const secondaryMain = '#202144';
export const secondaryLight = lighten(secondaryMain, 0.1);
export const secondaryDark = darken(secondaryMain, 0.2);

export const theme = createTheme({
    typography : {

        fontFamily : `'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
        h1 : {color : primaryBlue, fontSize : '2.5rem', fontWeight : 500},
        h2 : {fontSize : '1.1rem', fontWeight : 500},
        h3 : {fontSize : '1rem',},
        h4 : {fontSize : '1rem',},
        h5 : {fontSize : '1rem',},
        h6 : {fontSize : '1rem',},
        // h3 : {fontSize : '1.5rem', fontWeight : 500},
    },
    palette : {
        primary : {
            main : primaryBlue,
            light : primaryBlueLight,
            dark : primaryBlueDark,
        },
        secondary : {
            main : secondaryMain,
            light : secondaryLight,
            dark : secondaryDark,
        }
    },
    components : {
        MuiDivider : {
            styleOverrides : {

                root : () => ({
                    // use JavaScript conditional expression
                    color : primaryBlue,
                    '&::before' : {
                         width : 0,
                    },
                    '&::after' : {
                        borderColor : primaryBlueLight,
                        width: '100%'
                    },
                }),
                wrapper : () => ({paddingBottom : '6px', paddingLeft : 0})
            },
        },
        MuiListItemIcon : {
            styleOverrides : {
                root : () => ({
                    minWidth : 'unset',
                    alignSelf : 'baseline',
                    marginRight : '6px',
                    fontSize : '0.5rem',
                    color: secondaryDark,
                })
            }
        },
        MuiLink : {
            styleOverrides : {
                root : () => ({
                    // use JavaScript conditional expression
                    color : secondaryMain,
                    '&:hover' : {
                        color: primaryBlue,
                        fontWeight: 500,
                    },
                }),
            },
        },
    },
});