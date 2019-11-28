import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: null }
    }
    render() {
        return (
            <button className="square" onClick={()=>{this.setState({value:"x"})}}>
                {this.state.value}
            </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i}/>;
    }

    render() {
        const status = 'Next player: X';
        var h = [],c=0;
        let row = (r) => {
            var _h = [];
            for (var j = 1; j <= r; j++) {
                _h.push(this.renderSquare(c));c++;
            }
            return _h
        }

        for (var i = 1; i <= this.props.row; i++) {
            h.push(<div className="row">{row(this.props.col)}</div>)
        }

        return (
            <div>
                <div className="status">{status}</div>
                {h}
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board row="10" col="10" />
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
