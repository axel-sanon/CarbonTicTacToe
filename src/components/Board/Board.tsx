import Square from "../Square/Square";
import React from 'react';

function Board(props: { squares: string[]; onClick: (i: number) => void; }) {

    const renderSquare = (i: number) => {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    };

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;