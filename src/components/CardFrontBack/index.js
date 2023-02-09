import CardGame from "../CardGame";
import './style.css'

function CardFrontBack(img) {

    window.cardFrontBack = {} // é um namespace, que torna a função global (window) handleClick única do CardFrontBack
    window.cardFrontBack.handleClick = (event) => { // função para remover e adicionar a classe active quando clicar (event.target - target identifica exatamente qual elemento foi clicado)
        const $origin = event.target;
        const $cardFrontBack = $origin.closest(".card-front-back") // closest: todos os elementos que estiverem entre o elemento selecionado e o passado por parametro

        $cardFrontBack.classList.toggle("-active")
    }

    return /*html*/`
        <article class="card-front-back" onclick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame(img)}
            </div>
        </article>
    `
}

export default CardFrontBack;