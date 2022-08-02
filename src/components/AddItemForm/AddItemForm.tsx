import React, { ChangeEvent, FC, KeyboardEvent, memo, useState } from 'react';

import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton, TextField } from '@mui/material';

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
    <div style={{ display: 'flex' }}>
      <TextField
        variant="outlined"
        value={newCityTitle}
        onChange={onSetNewTitleHandler}
        onKeyPress={onEnterKeyPressHandler}
        error={!!error}
        label="Title"
        helperText={error}
        disabled={disabled}
        style={{ backgroundColor: 'white' }}
        placeholder="Enter City name"
      />
      <IconButton
        color="primary"
        onClick={addItem}
        disabled={disabled}
        style={{ marginLeft: '10px' }}
      >
        <AddBoxIcon />
      </IconButton>
    </div>
  );
});
