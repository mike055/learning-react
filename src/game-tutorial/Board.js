import React, { Component } from 'react';
import Square from './Square';


class Board extends React.Component {

  renderSquare(i, winningCol) {
    return <Square key={i} value={this.props.squares[i]} onClick={() => this.props.onClick(i)} winningCol={winningCol} />;
  }
  render() {

    //todo: seems weird to have this array, investigate for loop
    const board = [0,1,2].map( (i) => { 
      let rowStartingPoint = i * 3;

      const squares = [0,1,2].map( (j) => {
        var colNumber = rowStartingPoint + j;
        var winningCol = this.props.winningLines.includes(colNumber);

        return this.renderSquare(rowStartingPoint + j, winningCol);
      });

      return (
        <div className="board-row" key={i}>
          {squares}
        </div>
      );

    });

    return (
      <div>
        {board}
      </div>
    );
  }
}

export default Board;