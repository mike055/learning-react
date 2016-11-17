import React from 'react';

function Square(props) {
  return (
    <button className={'square' + (props.winningCol ? ' winningCol' : '')} onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;