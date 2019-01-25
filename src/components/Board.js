import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
  state = {
    board: [],
    size: 30,
  };

  componentDidMount() {
    this.createBoard();
  }

  createBoard = () => {
    const board = [];
    for (let i = 0; i < this.state.size; i++) {
      let row = [];
      for (let j = 0; j < this.state.size; j++) {
        row.push({
          position: {
            y: i,
            x: j,
          },
          isAlive: false,
        });
      }
      board.push(row);
    }
    board[12][13].isAlive = true;
    board[12][14].isAlive = true;
    board[12][15].isAlive = true;
    board[12][16].isAlive = true;
    board[12][17].isAlive = true;

    board[14][13].isAlive = true;
    board[16][13].isAlive = true;
    board[16][14].isAlive = true;
    board[16][15].isAlive = true;
    board[16][16].isAlive = true;
    board[16][17].isAlive = true;
    board[14][17].isAlive = true;

    this.setState({
      board: board,
    });
  };

  generationChange = (board) => {
    const neighboursToChange = [];
    for (let i = 0; i < this.state.size; i++) {
      for (let j = 0; j < this.state.size; j++) {
        let aliveNeighbours = this.countAliveNeighbours(board[j][i]);
        if (this.fateOfCell(aliveNeighbours, board[j][i]) !== 'chikusho') {
          neighboursToChange.push(
            this.fateOfCell(aliveNeighbours, board[j][i])
          );
        }
      }
    }
    if (neighboursToChange.length !== 0) {
      this.changeCells(neighboursToChange, board);
    }
  };

  countAliveNeighbours = (cell) => {
    let counter = 0;
    const size = this.state.size;
    const X = cell.position.x;
    const Y = cell.position.y;
    if (Y - 1 >= 0 && this.state.board[Y - 1][X].isAlive) {
      counter++;
    }
    if (Y - 1 >= 0 && X + 1 < size && this.state.board[Y - 1][X + 1].isAlive) {
      counter++;
    }
    if (Y - 1 >= 0 && X - 1 >= 0 && this.state.board[Y - 1][X - 1].isAlive) {
      counter++;
    }
    if (X + 1 < size && this.state.board[Y][X + 1].isAlive) {
      counter++;
    }
    if (X - 1 >= 0 && this.state.board[Y][X - 1].isAlive) {
      counter++;
    }
    if (
      Y + 1 < size &&
      X + 1 < size &&
      this.state.board[Y + 1][X + 1].isAlive
    ) {
      counter++;
    }
    if (Y + 1 < size && X - 1 >= 0 && this.state.board[Y + 1][X - 1].isAlive) {
      counter++;
    }
    if (Y + 1 < size && this.state.board[Y + 1][X].isAlive) {
      counter++;
    }
    return counter;
  };

  fateOfCell = (aliveNeighbours, cell) => {
    if (!cell.isAlive && aliveNeighbours === 3) {
      return cell;
    }
    if (cell.isAlive && (aliveNeighbours < 2 || aliveNeighbours > 3)) {
      return cell;
    }
    return 'chikusho';
  };

  changeCells = (neighboursToChange, board) => {
    for (let neighbour of neighboursToChange) {
      board[neighbour.position.y][neighbour.position.x].isAlive = !board[
        neighbour.position.y
      ][neighbour.position.x].isAlive;
    }

    this.setState({
      board: board,
    });
  };

  onClickSTART = (e) => {
    e.preventDefault();
    let start = () => {
      setInterval(() => this.generationChange(this.state.board), 500);
    };
    document.getElementsByClassName('start')[0].disabled = true;
    start();
  };

  onClickCell = (e) => {
    let xy = e.target.name.split(' ');
    xy[0] = parseInt(xy[0]);
    xy[1] = parseInt(xy[1]);
    let board = this.state.board;
    board[xy[1]][xy[0]].isAlive = !board[xy[1]][xy[0]].isAlive;
    this.setState({
      board: board,
    })
  }

  render() {
    return (
      <div className="board">
        <button onClick={this.onClickSTART} className="start">
          START
        </button>
        {this.state.board.map((row, i) => (
          <div key={i}>
            {row.map((cell, j) => (
              <Cell key={j} cell={this.state.board[i][j]}
              onClickCell={this.onClickCell}/>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
