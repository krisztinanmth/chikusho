import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
  state = {
    board: [],
    height: 35,
    width: 50,
    isAlive: false,
  };

  componentDidMount() {
    this.createBoard();
  }

  createBoard = () => {
    const board = [];
    for (let i = 0; i < this.state.height; i++) {
      let row = [];
      for (let j = 0; j < this.state.width; j++) {
        row.push({
          position: {
            x: i,
            y: j,
          },
        });
      }
      board.push(row);
    }

    this.setState({
      board: board,
    });
  };

  render() {
    return (
      <div className="board">
        {this.state.board.map((row, i) => (
          <div key={i}>
            {row.map((cell, j) => (
              <Cell />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
