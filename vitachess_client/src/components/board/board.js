import generateBoard from "../../functions/board/generateBoard";

function Board() {
  let {squares, pieces, texts} = generateBoard(0);

  return (
    <svg
      style={{ width: "80vh", height: "80vh" }}
      viewBox={`0 0 ${8 * 40} ${8 * 40}`}
    >
      {squares}
      {pieces}
    </svg>
  );
}

export default Board;
