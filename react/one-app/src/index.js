import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {
    return (
        <button className="square" onClick={() => props.onClick()} >
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            squares: Array(this.props.row * this.props.col)
            , xNext: true
        }
        console.log(this.state)
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    handleClick(i) {
        const squares = this.state.squares.slice(); console.log(i)
        if (calWinner(squares)) {
            return;
        }
        if (!squares[i]) {
            squares[i] = this.state.xNext ? 'X' : 'O';
            this.setState({ squares: squares, xNext: !this.state.xNext });
        }
    }

    render() {
        let status;
        let winner = calWinner(this.state.squares)
        if (winner) {
            status = 'Winner is ' + (winner);
        } else {
            status = 'Next player: ' + (this.state.xNext ? 'X' : 'O')
        }
        var h = [];
        let row = (x) => {
            var _h = [];
            for (var j = 0; j < this.props.col; j++) {
                _h.push(this.renderSquare(x * 10 + j));
            }
            return _h
        }

        for (var i = 0; i < this.props.row; i++) {
            h.push(<div className="row">{row(i)}</div>)
        }

        return (
            <div>
                <div className="status">{status}</div>
                {h}
            </div>
        );
    }
}
function calWinner(squares) {
    const lines = [
        [0, 1, 2],
        [10, 11, 12],
        [20, 21, 22],
        [0, 10, 20],
        [11, 11, 21],
        [2, 12, 22],
        [0, 11, 22],
        [2, 11, 20],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board row={3} col={3} />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
