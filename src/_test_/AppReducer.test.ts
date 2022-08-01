import {NullableType, RequestStatusType} from 'types/AppTypes';
import {appReducer, setAppError, setAppStatus} from 'store/reducers/AppReducer';


type initialStateType = {
  status: RequestStatusType,
  error: NullableType<string>,
}

let initialState: initialStateType;

beforeEach(() => {
  initialState = {
    status: 'idle',
    error: null as NullableType<string>,
  }
})


test('correct error message should be set', () => {

  const endState = appReducer(initialState, setAppError({error: 'SOMETHING WRONG'}))

  expect(endState.error).toBe('SOMETHING WRONG');

});

test('correct status should be set', () => {

  const endState = appReducer(initialState, setAppStatus({status: 'loading'}))

  expect(endState.status).toBe('loading');

});




