import React from 'react';
import './Auth.scss';

const Auth = (props) => {
  return (
    <div className="auth">
      <h1 className="auth__title">Authorization</h1>
      <button
        className="btn auth__btn login"
        onClick={props.onClick}
      >
        Login
      </button>
    </div>
  );
};

export default Auth;
