import React,{useState} from "react";
import player from "./Player.jsx";




function GameBoard({ onSelectButton, board }) {



    // const [gameBoard, setGameBoard] = useState(initialGameBoard);
    //
    // function handleSelectButton(rowIndex, colIndex){
    //   setGameBoard((prevGameBoard)=> {
    //       const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
    //       updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
    //       return updatedBoard;
    //   });
    //   onSelectButton();
    // };

    return (
        <ol id="game-board" className="highlight-player">
            {board.map((row,rowIndex)=> (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex)=> (
                        <li key={colIndex}>
                            <button onClick={() => onSelectButton(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li> ))}
        </ol>
    )
}

export default GameBoard;