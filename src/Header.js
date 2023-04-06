export default function Header({size, setSize, player}) {

    const reset = ()=>{
        setSize(()=> {
            return 0;
        })
    } 

    return (
        <>
            <h1>Noughts and Crosses</h1>

            <div className="header">
                <label htmlFor="width">Height & Width: </label>
                <input name="width" type="number" min="3" value={size} onChange={
                    (event)=> setSize(+event.target.value) 
                } />

                <div className="inline">
                    <span>Player {player+1}'s turn</span>
                    <button onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
}