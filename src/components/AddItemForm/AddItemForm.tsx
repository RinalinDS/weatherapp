import React, { ChangeEvent, FC, KeyboardEvent, memo, useState } from 'react';

import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton, TextField } from '@mui/material';

import styles from './AddItemForm.module.css';

type AddItemFormPropsType = {
  callBack: (title: string) => void;
  disabled?: boolean;
};

export const AddItemForm: FC<AddItemFormPropsType> = memo(({ callBack, disabled }) => {
  const [newCityTitle, setNewCityTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSetNewTitleHandler = (e: ChangeEvent<HTMLInputElement>): void =>
    setNewCityTitle(e.currentTarget.value);

  const onEnterKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (error) {
      setError(null);
    }
    if (e.key === 'Enter') {
      addItem();
    }
  };
  const addItem = (): void => {
    if (newCityTitle.trim()) {
      callBack(newCityTitle.trim());
      setNewCityTitle('');
    } else {
      setError('Title is required');
    }
  };

  return (
    <div className={styles.container}>
      <TextField
        variant="outlined"
        value={newCityTitle}
        onChange={onSetNewTitleHandler}
        onKeyDown={onEnterKeyPressHandler}
        error={!!error}
        label="City name"
        helperText={error}
        disabled={disabled}
      />
      <IconButton color="primary" onClick={addItem} disabled={disabled}>
        <AddBoxIcon />
      </IconButton>
    </div>
  );
});
