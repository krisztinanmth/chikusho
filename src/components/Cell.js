import React from 'react';

const Cell = ({cell, onClickCell}) => {
  
  const status = (isAlive) => {
    return isAlive ? 'cell alive' : 'cell dead';
  }
  
  return <button className={status(cell.isAlive)} onClick={onClickCell} name={cell.position.x + ' ' + cell.position.y}></button>;
};

export default Cell;
