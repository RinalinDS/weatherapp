import React from 'react';

export type ThunkApiType = {
  dispatch: (action: any) => any;
  rejectWithValue: Function;
};

export type RejectValueType = { rejectValue: { error: string } };

export type ContactType = {
  href: string;
  text: string;
  icon?: React.ReactNode;
};
