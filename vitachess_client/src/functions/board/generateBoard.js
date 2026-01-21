import Square from "../../components/board/square.js";

import { ReactComponent as LightPawnIcon } from "../../chess_pieces_icons/light_pieces/lp_icon.svg";
import { ReactComponent as DarkPawnIcon } from "../../chess_pieces_icons/dark_pieces/dp_icon.svg";

import { ReactComponent as LightRookIcon } from "../../chess_pieces_icons/light_pieces/lr_icon.svg";
import { ReactComponent as DarkRookIcon } from "../../chess_pieces_icons/dark_pieces/dr_icon.svg";

import { ReactComponent as LightKnightIcon } from "../../chess_pieces_icons/light_pieces/ln_icon.svg";
import { ReactComponent as DarkKnightIcon } from "../../chess_pieces_icons/dark_pieces/dn_icon.svg";

import { ReactComponent as LightBishopIcon } from "../../chess_pieces_icons/light_pieces/lb_icon.svg";
import { ReactComponent as DarkBishopIcon } from "../../chess_pieces_icons/dark_pieces/db_icon.svg";

import { ReactComponent as LightQueenIcon } from "../../chess_pieces_icons/light_pieces/lq_icon.svg";
import { ReactComponent as DarkQueenIcon } from "../../chess_pieces_icons/dark_pieces/dq_icon.svg";

import { ReactComponent as LightKingIcon } from "../../chess_pieces_icons/light_pieces/lk_icon.svg";
import { ReactComponent as DarkKingIcon } from "../../chess_pieces_icons/dark_pieces/dk_icon.svg";

// 0 -> black, 1 - (other) -> white
function generateBoard(color){
    console.log("v generateBoard");
    const size = 40;
    const rows = 8;
    const cols = 8;
    const squares = [];
    const pieces = [];
    const texts = [];
    let squareIndex = 0;
    const offset = (size - 45) / 2;

    if(color === 0){
        for(let y = 0; y < rows; y++){
            for(let x = 0; x < cols; x++){
                squares.push(
                    <Square
                        key={squareIndex++}
                        x={x}
                        y={y}
                        size={size}
                        id={squareIndex}
                    />
                )
                // Light piece icons 
                if(y === 1){
                    pieces.push(<LightPawnIcon key={`light-pawn-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>) 
                }
                else if((x === 0 && y === 0) || (x === 7 && y === 0)){
                    pieces.push(<LightRookIcon key={`light-rook-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if((x === 1 && y === 0) || (x === 6 && y === 0)){
                    pieces.push(<LightKnightIcon key={`light-knight-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if((x === 2 && y === 0) || (x === 5 && y === 0)){
                    pieces.push(<LightBishopIcon key={`light-bishop-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if(x === 3 && y === 0){
                    pieces.push(<LightKingIcon key={`light-king-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if(x === 4 && y === 0){
                    pieces.push(<LightQueenIcon key={`light-queen-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                // Dark piece icons 
                else if(y === 6){
                    pieces.push(<DarkPawnIcon key={`dark-pawn-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>) 
                }
                else if((x === 0 && y === 7) || (x === 7 && y === 7)){
                    pieces.push(<DarkRookIcon key={`dark-rook-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if((x === 1 && y === 7) || (x === 6 && y === 7)){
                    pieces.push(<DarkKnightIcon key={`dark-knight-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if((x === 2 && y === 7) || (x === 5 && y === 7)){
                    pieces.push(<DarkBishopIcon key={`dark-bishop-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if(x === 3 && y === 7){
                    pieces.push(<DarkKingIcon key={`dark-king-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if(x === 4 && y === 7){
                    pieces.push(<DarkQueenIcon key={`dark-queen-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
            }  
        }
    }
    else{ //white
        for(let y = 0; y < rows; y++){
            for(let x = 0; x < cols; x++){
                squares.push(
                    <Square
                        key={squareIndex++}
                        x={x}
                        y={y}
                        size={size}
                        id={squareIndex}
                    />
                )
                // Light piece icons 
                if(y === 6){
                    pieces.push(<LightPawnIcon key={`light-pawn-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>) 
                }
                else if((x === 0 && y === 7) || (x === 7 && y === 7)){
                    pieces.push(<LightRookIcon key={`light-rook-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if((x === 1 && y === 7) || (x === 6 && y === 7)){
                    pieces.push(<LightKnightIcon key={`light-knight-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if((x === 2 && y === 7) || (x === 5 && y === 7)){
                    pieces.push(<LightBishopIcon key={`light-bishop-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if(x === 4 && y === 7){
                    pieces.push(<LightKingIcon key={`light-king-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if(x === 3 && y === 7){
                    pieces.push(<LightQueenIcon key={`light-queen-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                // Dark piece icons 
                else if(y === 1){
                    pieces.push(<DarkPawnIcon key={`dark-pawn-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>) 
                }
                else if((x === 0 && y === 0) || (x === 7 && y === 0)){
                    pieces.push(<DarkRookIcon key={`dark-rook-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if((x === 1 && y === 0) || (x === 6 && y === 0)){
                    pieces.push(<DarkKnightIcon key={`dark-knight-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if((x === 2 && y === 0) || (x === 5 && y === 0)){
                    pieces.push(<DarkBishopIcon key={`dark-bishop-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if(x === 4 && y === 0){
                    pieces.push(<DarkKingIcon key={`dark-king-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
                else if(x === 3 && y === 0){
                    pieces.push(<DarkQueenIcon key={`dark-queen-${x}`} x={x * size + offset} y={y * size + offset} size={size}/>)
                }
            }  
        }
    }

    return {squares, pieces, texts};
}

export default generateBoard;