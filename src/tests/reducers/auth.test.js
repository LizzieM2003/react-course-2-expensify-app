import authReducer from '../../reducers/auth';

test('should setup default state value', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const uid = '123456abc';
  const state = authReducer({}, { type: 'LOGIN', uid });
  expect(state.uid).toBe(uid);
});

test('should clear uid for logout', () => {
  const uid = '123456abc';
  const state = authReducer({ uid }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});
