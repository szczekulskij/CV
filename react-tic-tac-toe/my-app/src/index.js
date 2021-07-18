import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*------------------------------------------------------------------
-------- Square functions - the most bottom function ---------------
-------------------------------------------------------------------*/

function Square(props){
  return(
    <button 
      className="square" 
      onClick={() =>  props.onClick()}
    >
      {props.value}
    </button>
  )
}
  
/*------------------------------------------------------------------
-------- Board Class - handles board -------------------------------
-------------------------------------------------------------------*/
  class Board extends React.Component {

    renderSquare(i) {
      return (
      <Square 
      value = {this.props.squares[i]}
      onClick = {() => this.props.onClick(i)} />
      )
    }
  
    render() {
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
/*------------------------------------------------------------------
-------- Game Class - top level class ------------------------------
-------------------------------------------------------------------*/
  class Game extends React.Component {
    
    constructor(props){
      super(props)
      this.state  = { 
        history :[{
          squares : Array(9).fill(null)
        }],
        xIsNext : true,
        stepNumber : 0,
      };
    }

    handleClick(i){
      const history = this.state.history.slice(0, this.state.stepNumber + 1)
      const current = history[history.length - 1 ];
      const squares = current.squares.slice();
    // That checks for both if game finished and if square taken : ) 
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
      squares[i] = this.state.xIsNext? 'X' : 'O'
      this.setState({
        history : history.concat([
          {
            squares : squares
          }]),
         stepNumber : history.length,
         xIsNext : !this.state.xIsNext
        });
    }

    
    jumpTo(move) {
      // const history = this.state.history.slice(0, move + 1)
      this.setState({
        stepNumber: move,
        xIsNext: (move % 2) === 0,
        history : this.state.history.slice(0, move + 1)
      });
    }


    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const moves = history.map((step,move) => {
        const description = move ? 'Go to move #' + move : 'Go to game start';
      if ((this.state.history.length) === 1) {return;}
      else {
        return ( 
          <li key = {move}>
            <button onClick = {() =>this.jumpTo(move)} > {description} </button>
          </li>
        )
      }})

      let status
      if (winner){
        status = 'Winner: ' + winner
      }
      else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }


      return (
        <div className="game">
          <div className="game-board">
            <Board 
              squares = {current.squares}
              onClick = {(i) => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status }</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }


/*------------------------------------------------------------------
----------------------- Universal functions : ----------------------
-------------------------------------------------------------------*/
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}



/*------------------------------------------------------------------
----------------------- React's Render: ----------------------------
-------------------------------------------------------------------*/

  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  