import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const Login = ({ startLogin }) => (
  <div>
    <h1>Login</h1>
    <button onClick={startLogin}>Login</button>
  </div>
);

export default connect(null, { startLogin })(Login);
