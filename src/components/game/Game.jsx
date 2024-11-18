import { useState } from "react"
import { initPlayers } from "../../mockPlayers"
import style from './Game.module.css'
import { Bottle } from "../bottle/Bottle"
import { Player } from "../player/Player"

const Game = () =>{
  const [players, setPlayers] = useState(initPlayers)
  console.log(players)
  return (
    <>
      <div className={style.wrap}>
          <div className={style.bottle}><Bottle/></div>
          <div className={style.players}>
            {players.map((player)=>{
              return <Player key={player.id} player={player}/>
            })}
          </div>
      </div>
    </>
  )
}

export default Game
