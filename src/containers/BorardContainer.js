import React, { Component } from 'react';
import Board from '../components/Board';
import '../styles/boardContainer.css';

class BoardContainer extends Component {
  state = {};

  render() {
    return (
      <div className="board-container">
        <Board />
      </div>
    );
  }
}

export default BoardContainer;
