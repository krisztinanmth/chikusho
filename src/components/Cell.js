import React from 'react';

const Cell = ({isAlive}) => {
  
  const status = (isAlive) => {
    return isAlive ? 'cell alive' : 'cell dead';
  }
  
  return <button className={status(isAlive)}></button>;
};

export default Cell;
