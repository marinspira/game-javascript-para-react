import './styles.css'
import CardFrontBack from '../../components/CardFrontBack';

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

function BoardGame() {

    // Embaralha as imagens
    const srcImg = ["blair1", "blair1", "blair2", "blair2", "blair3", "blair3"];

    const cardsRandow = shuffleArray(srcImg);
    let $htmlContent = '';

    for (let i = 0; i < cardsRandow.length; i++) {
        const card = cardsRandow[i];
        $htmlContent += CardFrontBack(card);
    }

    // Duas classes ativa: desvira os cards e muda o player
    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game');
        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active')
        const $arrowDown = document.querySelector('.arrow-down');

        const flipAndHideCards = () => {
            $cardsActive.forEach((card) => card.classList.remove('-active'));
        } 

        if ($cardsActive.length == 2) {
            setTimeout(() => {
                flipAndHideCards();
                const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
                $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1);
            }, 1000)
        }
    }

    return /*html*/`
    <section class="board-game" onClick="boardGame.handleClick()">
    ${$htmlContent}
    </section>
    `;
}

export default BoardGame;