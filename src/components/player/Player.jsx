export const Player = ({player}) => {
    const imagePath = `./../assets/Regular face ${player.id}.png`
    return (
        <>
        <img src={imagePath} alt="фото" />
        </>
    )
}