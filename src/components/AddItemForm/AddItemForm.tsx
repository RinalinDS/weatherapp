import React, { ChangeEvent, FC, KeyboardEvent, memo, useState } from 'react';

import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton, TextField } from '@mui/material';

import styles from './AddItemForm.module.css';

type AddItemFormPropsType = {
  callBack: (title: string) => void;
  disabled?: boolean;
};

export const AddItemForm: FC<AddItemFormPropsType> = memo(({ callBack, disabled }) => {
  const [newTitle, setNewTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onSetNewTitleHandler = (e: ChangeEvent<HTMLInputElement>): void =>
    setNewTitle(e.currentTarget.value);

  const onEnterKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (error) {
      setError(null);
    }
    if (e.key === 'Enter') {
      addItem();
    }
  };
  const addItem = (): void => {
    if (newTitle.trim()) {
      callBack(newTitle.trim());
      setNewTitle('');
    } else {
      setError('Title is required');
    }
  };

  return (
    <div className={styles.container}>
      <TextField
        className={styles.textField}
        variant="outlined"
        value={newTitle}
        onChange={onSetNewTitleHandler}
        onKeyDown={onEnterKeyPressHandler}
        error={!!error}
        label="City name"
        helperText={error}
        disabled={disabled}
      />
      <IconButton
        className={styles.button}
        color="primary"
        onClick={addItem}
        disabled={disabled}
      >
        <AddBoxIcon />
      </IconButton>
    </div>
  );
});
