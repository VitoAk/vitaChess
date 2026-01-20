function Square({x, y, size, id}){
    const isBlack = (x + y) % 2 === 1;
    function handleClick(){
        console.log("Clicked square:", id);
    }

    function getCoordinates(){
        return {x: x * size, y: y * size};
    }
    return(
        <>
        {/* Base square, always loads */}
        <rect x={x * size} y={y * size} height={size} width={size}
            fill={isBlack ? "#4e1b03" : "#eee"} 
            data-id={id} onClick={handleClick}/>
        
        </>
    )
}

export default Square;