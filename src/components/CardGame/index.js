import "./style.css"

function CardGame(icon = "me", alt = "Maria") {
    return `<article class="card-game">
        <img src="images/${icon}.webp" alt="${alt}">
    </article>`
}

export default CardGame;