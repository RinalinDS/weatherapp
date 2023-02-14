import { appActions } from 'store/reducers/AppReducer';
import { ThunkApiType } from 'types/UtilTypes';

export const handleAsyncServerNetworkError = (
  message: string | undefined,
  thunkAPI: ThunkApiType,
): any => {
  const { setAppError, setAppStatus } = appActions;
  thunkAPI.dispatch(setAppError({ error: message || 'Some Error occurred' }));
  thunkAPI.dispatch(setAppStatus({ status: 'failed' }));

  return thunkAPI.rejectWithValue({ error: message });
};
