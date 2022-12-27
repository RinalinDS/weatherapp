import React, { FC } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import generalStyles from '../../common/styles.module.css';

import { useAppDispatch, useAppSelector } from 'hooks/useAppHooks';
import { setAppError } from 'store/reducers/AppReducer';
import { selectError } from 'store/selectors/AppSelectors';
import { NullableType } from 'types/AppTypes';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

export const ErrorSnackbar: FC = () => {
  const error = useAppSelector<NullableType<string>>(selectError);
  const dispatch = useAppDispatch();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setAppError({ error: null }));
  };
  const action = (
    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <div>
      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={handleClose}
        action={action}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          <span className={generalStyles.text}>{error}</span>
        </Alert>
      </Snackbar>
    </div>
  );
};
