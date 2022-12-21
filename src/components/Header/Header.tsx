import React, { FC } from 'react';

import { AppBar, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { Path } from '../../enum/Path';

export const Header: FC = () => {
  const navigate = useNavigate();
  const buttonText = 'Home';

  const backHomeHandler = (): void => {
    navigate(Path.Home);
  };

  return (
    <AppBar position="static" style={{ background: '#2E3B55' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button color="inherit" onClick={backHomeHandler}>
          {buttonText}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
