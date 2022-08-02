import { setAppError, setAppStatus } from 'store/reducers/AppReducer';
import { ThunkApiType } from 'types/UtilTypes';

export const handleAsyncServerNetworkError = (
  message: string,
  thunkAPI: ThunkApiType,
): any => {
  thunkAPI.dispatch(setAppError({ error: message || 'Some Error occurred' }));
  thunkAPI.dispatch(setAppStatus({ status: 'failed' }));

  return thunkAPI.rejectWithValue({ error: message });
};
