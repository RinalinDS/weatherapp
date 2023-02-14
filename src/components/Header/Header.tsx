import React, { FC } from 'react';

import { AppBar, Button, styled, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import generalStyles from '../../common/styles.module.css';
import { Path } from '../../enum/Path';

const HeaderToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
const HeaderBar = styled(AppBar)(() => ({
  background: '#2E3B55',
}));

export const Header: FC = () => {
  const navigate = useNavigate();
  const buttonText = 'Home';

  const backHomeHandler = (): void => {
    navigate(Path.Home);
  };

  return (
    <HeaderBar position="static">
      <HeaderToolbar>
        <Button color="inherit" onClick={backHomeHandler}>
          <span className={generalStyles.text}>{buttonText}</span>
        </Button>
      </HeaderToolbar>
      ;
    </HeaderBar>
  );
};
