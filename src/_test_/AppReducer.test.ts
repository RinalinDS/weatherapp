import { appReducer, appActions } from 'store/reducers/AppReducer';
import { NullableType, RequestStatusType } from 'types/AppTypes';

type initialStateType = {
  status: RequestStatusType;
  error: NullableType<string>;
};

let initialState: initialStateType;

beforeEach(() => {
  initialState = {
    status: 'idle',
    error: null as NullableType<string>,
  };
});

test('correct error message should be set', () => {
  const endState = appReducer(
    initialState,
    appActions.setAppError({ error: 'SOMETHING WRONG' }),
  );

  expect(endState.error).toBe('SOMETHING WRONG');
});

test('correct status should be set', () => {
  const endState = appReducer(
    initialState,
    appActions.setAppStatus({ status: 'loading' }),
  );

  expect(endState.status).toBe('loading');
});
