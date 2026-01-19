import Square from "./square";

function Board() {
  const size = 40;
  const rows = 8;
  const cols = 8;

  return (
    <svg
      style={{ width: "40vh", height: "40vh" }}
      viewBox={`0 0 ${cols * size} ${rows * size}`}
    >
      {Array.from({ length: rows }).map((_, y) =>
        Array.from({ length: cols }).map((_, x) => (
          <Square
            key={`${x}-${y}`}
            x={x}
            y={y}
            size={size}
            id={`${x}-${y}`}
          />
        ))
      )}
    </svg>
  );
}

export default Board;
