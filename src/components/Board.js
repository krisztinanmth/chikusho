import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
  state = {
    board: [],
    height: 50,
    width: 50,
  };

  componentDidMount() {
    this.createBoard();
    setInterval(()=> this.generationChange(this.state.board), 5000); 
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
          isAlive: false,
        });
      }
      board.push(row);
    }

    this.setState({
      board: board,
    });
  };

  generationChange = (board) => {
    board[5][2].isAlive = true;
    board[6][2].isAlive = true;
    board[7][2].isAlive = true;
    const neighboursToChange = [];
    for(let i = 0; i < this.state.height; i++) {
      for(let j = 0; j < this.state.width; j++) {
        let aliveNeighbours = this.countAliveNeighbours(board[i][j]);
        if(this.fateOfCell(aliveNeighbours, board[i][j]) !== 'chikusho') {
          neighboursToChange.push(this.fateOfCell(aliveNeighbours, board[i][j]));
        }
      }
    }
    if(neighboursToChange.length !== 0) {
      this.changeCells(neighboursToChange, board);
    }
  }

  countAliveNeighbours = (cell) => {
    let counter = 0;
    if(cell.position.y - 1 >= 0 && this.state.board[cell.position.y -1][cell.position.x].isAlive) {
      counter++;
    }
    if(cell.position.y - 1 >= 0 && cell.position.x + 1 < this.state.width && this.state.board[cell.position.y -1][cell.position.x + 1].isAlive) {
      counter++;
    }
    if(cell.position.y - 1 >= 0 && cell.position.x - 1 >= 0 && this.state.board[cell.position.y -1][cell.position.x -1].isAlive) {
      counter++;
    }
    if(cell.position.x + 1 < this.state.width && this.state.board[cell.position.y][cell.position.x + 1].isAlive) {
      counter++;
    }
    if(cell.position.x - 1 >= 0 && this.state.board[cell.position.y][cell.position.x - 1].isAlive) {
      counter++;
    }
    if(cell.position.y + 1 < this.state.height && cell.position.x + 1 < this.state.height && this.state.board[cell.position.y + 1][cell.position.x + 1].isAlive) {
      counter++;
    }
    if(cell.position.y + 1 < this.state.height && cell.position.x - 1 >= 0 && this.state.board[cell.position.y + 1][cell.position.x - 1].isAlive) {
      counter++;
    }
    if(cell.position.y + 1 < this.state.height && this.state.board[cell.position.y + 1][cell.position.x].isAlive) {
      counter++;
    }
    return counter;
  }

  fateOfCell = (aliveNeighbours, cell) => {
    if(!cell.isAlive && aliveNeighbours === 3) {
      return cell;
    }
    if(cell.isAlive && (aliveNeighbours < 2 || aliveNeighbours >3)) {
      return cell;
    }
    return 'chikusho';
  }

  changeCells = (neighboursToChange, board) => {
    console.log("neighboursToChange", neighboursToChange);
    
    for(let neighbour of neighboursToChange) {
      board[neighbour.position.y][neighbour.position.x].isAlive = !board[neighbour.position.y][neighbour.position.x].isAlive;
    }
    
     this.setState({
       board: board,
     })
  }

  render() {
    console.log("board", this.state.board);
    return (
      <div className="board">
        {this.state.board.map((row, i) => (
          <div key={i}>
            {row.map((cell, j) => (
              <Cell isAlive={this.state.board[i][j].isAlive}/>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
