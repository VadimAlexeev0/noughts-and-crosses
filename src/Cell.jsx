import {useState} from "react"

export default function Cell({cellID, player, cellClick}) {
    const [pressedBy, setPressedBy] = useState(null)

    let contents;
    if(pressedBy === 0){
        contents = <p>X</p>
    } else if(pressedBy === 1){
        contents = <p>O</p>
    }

    return (
        <div className="cell" onClick={()=>{
            if(pressedBy === null){
                setPressedBy(player)
                cellClick(cellID)
            }
        }}>
            {contents}
        </div>
    )
}