import { FunctionComponent } from 'react';
import { Box, Chip, useTheme } from '@mui/material';

interface OwnProps {
    skillItems: string[];
}

type Props = OwnProps;

const chipMargin = 0.5;

const Skills: FunctionComponent<Props> = ({skillItems}) => {

    const theme= useTheme();
  return (
      <Box sx={{marginBottom: 1, [theme.breakpoints.only('xs')]: {textAlign: 'left', marginBlock: 3-(chipMargin*2)}}}>
          {skillItems.map(skill => <Chip key={skill} label={skill} sx={{margin: chipMargin, color: theme.palette.secondary.main}}variant="outlined" />)}
      </Box>
  );
};

export default Skills;
