export type ThunkApiType = {
  dispatch: (action: any) => any;
  rejectWithValue: Function;
};

export type RejectValueType = { rejectValue: { error: string } };
