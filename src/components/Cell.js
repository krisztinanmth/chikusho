import React from 'react';
import '../styles/cell.css';

const Cell = ({isAlive}) => {
  
  const status = (isAlive) => {
    return isAlive ? 'cell alive' : 'cell dead';
  }
  
  return <button className={status(isAlive)}></button>;
};

export default Cell;
