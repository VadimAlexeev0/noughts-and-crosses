import Cell from "./Cell"

export default function GameGrid({size, player, cellClick}){
    // Amount of cells to create is size * size
    let gameCells = [];

    for (let i = 0; i < size*size; i++) {
        gameCells.push(<Cell key={i} cellID={i} player={player} cellClick={cellClick} />)
    }

    const columns = {
        "gridTemplateColumns": `repeat(${size}, 1fr)`
    }

    if(size >= 3){
        return (
            <div className="game-grid" style={columns}>
                {gameCells.map((data)=> data)}
            </div>
        )
    } else {
        return (
            <h2>Please select size of grid.</h2>
        )
    }
}