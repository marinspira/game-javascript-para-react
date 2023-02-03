import CardGame from "../CardGame";
import './style.css'

function CardFrontGameBack() {

    window.cardFrontBack = {} // é um namespace, que torna a função global (window) handleClick única do CardFrontBack
    window.cardFrontBack.handleClick = (event) => {
        const $origin = event.target;
        const $cardFrontBack = $origin.closest(".card-front-back") // closest: todos os elementos que estiverem entre o elemento selecionado e o passado por parametro

        /* 
        if ($cardFrontBack.classList.contains("-active")) {
            $cardFrontBack.classList.remove("-active")
        } else {
            $cardFrontBack.classList.add("-active");
        } 
        */

        $cardFrontBack.classList.toggle("-active")
    }

    return /*html*/`
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
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