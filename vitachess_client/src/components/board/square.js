function Square({x, y, size, id}){
    const isBlack = (x + y) % 2 === 1;
    return(
        <rect x={x * size} y={y * size} height={size} width={size}
            fill={isBlack ? "#614406" : "#eee"} data-id={id} />
    )
}

export default Square;