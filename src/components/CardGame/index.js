import "./style.css"

function CardGame(icon = "me") {
    return `<article class="card-game">
        <img src="images/${icon}.webp">
    </article>`
}

export default CardGame;