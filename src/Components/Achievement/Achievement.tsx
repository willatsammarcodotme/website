import { FunctionComponent, ReactNode } from 'react';
import { ListItemIcon } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

interface OwnProps {children: ReactNode}

type Props = OwnProps;

const Achievement: FunctionComponent<Props> = ({children}) => {

  return (
      <>
          <ListItemIcon><CircleIcon /></ListItemIcon>
          <span>{children}</span>
      </>
  );
};

export default Achievement;
