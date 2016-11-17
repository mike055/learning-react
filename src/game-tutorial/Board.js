import React, { Component } from 'react';
import Square from './Square';


class Board extends React.Component {

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }
  render() {

    //todo: seems weird to have this array, investigate for loop
    const board = [0,1,2].map( (i) => { 
      let rowStartingPoint = i * 3;

      const squares = [0,1,2].map( (j) => { 
        return this.renderSquare(rowStartingPoint + j);
      });

      return (
        <div className="board-row">
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