import style from './Player.module.css'
export const Player = ({player}) => {
    return (
        <>
        <img className={style.photo} src={player.imgPath} alt="фото" />
        </>
    )
}