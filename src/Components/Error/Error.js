import React from 'react';
import './Error.scss';

const Error = (props) => {
  return (
    <div className="error">
      <div className="error__text">{props.text}</div>
      <button className="error__close" onClick={props.onClose}></button>
    </div>
  );
};

export default Error;
