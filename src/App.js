import './App.css';
import {useState} from "react"

import Header from "./Header";
import GameGrid from "./GameGrid"

function App() {
  const [size, setSize] = useState(3);
  const [player, setPlayer] = useState(0)
  const [activeCells, setActiveCells] = useState([])

  const cellClick = (cellID)=>{
    console.log(cellID)
    setPlayer((currentValue)=>{
      if(currentValue === 0){
          return 1
      } else{
          return 0
      }
    })
    console.log(
      "X:",cellID%size,
      "\tY:", Math.floor(cellID/size)
    )
    setActiveCells([
      ...activeCells,
      {
        player: player,
        id: cellID,
        x: cellID%size,
        y: Math.floor(cellID/size)
      }
    ])

    // Check if any cells are 3 in a row
    checkWinning(cellID)
  }

  const checkWinning = (checkFrom)=>{
    console.log("Check")
    // Y,X
    const directions = {
      1: [-1, -1],
      2: [-1, 0],
      3: [-1, +1],
      4: [0, -1],
      5: [0, +1],
      6: [+1, -1],
      7: [+1, 0],
      8: [+1, +1]
    }

    for (let i = 0; i < Object.keys(directions); i++) {
      const direction = directions[i];
      console.log("IN",direction)

      
    }
  }

  console.log(activeCells)

  return (
    <div className="App">
      <Header  
        size={size}
        setSize={setSize}
        player={player}
      />

      <GameGrid size={size} player={player} cellClick={cellClick}/>
    </div>
  );
}

export default App;
