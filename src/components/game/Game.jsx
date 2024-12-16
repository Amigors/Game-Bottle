import { useEffect, useState } from "react"
import { initPlayers } from "../../mockPlayers"
import style from './Game.module.css'
import { Bottle } from "../bottle/Bottle"
import { Player } from "../player/Player"

const Game = () =>{
  const [players, setPlayers] = useState(initPlayers)
  const [hasAnimationClass, setHasAnimationClass] = useState(false);

  useEffect(()=>{
    const timerId = setTimeout(() => {
      setHasAnimationClass(true);
      setTimeout(() => {
        setHasAnimationClass(false);
      }, 4000);
    }, 5000);

    return () => clearTimeout(timerId);
  },[hasAnimationClass])


  console.log(players)
  return (
    <>
      <div className={style.wrap}>
          <div className={`${style.bottle} ${hasAnimationClass ? style.bottleSpin : ''}`}><Bottle/></div>
          <div className={style.players}>
            {players.map((player)=>{
              return (
                <div key={player.id} className={style.player}>
                  <Player  player={player}/>
                </div>)
            })}
          </div>
      </div>
    </>
  )
}

export default Game
