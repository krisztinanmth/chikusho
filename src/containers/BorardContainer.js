import React, { Component } from 'react';
import Board from '../components/Board';

class BoardContainer extends Component {
  state = {};

  render() {
    return (
      <div className="board-container">
        <h1 className="title">Game of Life</h1>
        <Board />
      </div>
    );
  }
}

export default BoardContainer;
