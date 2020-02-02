import React from 'react';

const Error = (props) => {
  return (
    <h1 className="error">
      {props.text}
    </h1>
  );
};

export default Error;
