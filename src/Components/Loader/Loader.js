import React from 'react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__text">Loading</div>
      <div className="spinner"></div>
    </div>
  );
};

export default Loader;
