import CardGame from "../CardGame";
import './style.css'

function CardFrontGameBack() {
    return /*html*/`
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("maria-working", "Maria trabalhando")}
            </div>
        </article>
    `
}

export default CardFrontGameBack;