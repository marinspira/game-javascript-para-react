import CardGame from "../CardGame";

function CardFrontGameBack() {
    return `
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("maria-working", "Maria trabalhando")}
        </article>
    `
}

export default CardFrontGameBack;