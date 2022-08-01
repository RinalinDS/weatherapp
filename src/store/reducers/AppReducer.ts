import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NullableType, RequestStatusType } from "types/AppTypes";

const slice = createSlice({
  name: "app",
  initialState: {
    status: "idle" as RequestStatusType,
    error: null as NullableType<string>,
  },
  reducers: {
    setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status;
    },
    setAppError(state, action: PayloadAction<{ error: NullableType<string> }>) {
      state.error = action.payload.error;
    },
  },
});

export const appReducer = slice.reducer;
export const { setAppStatus, setAppError } = slice.actions;
