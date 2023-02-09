import './styles.css'
import CardFrontBack from '../../components/CardFrontBack';

function BoardGame() {

    // Embaralha as imagens
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr;
    }

    const srcImg = ["blair1", "blair1", "blair2", "blair2", "blair3", "blair3"];

    const cardsRandow = shuffleArray(srcImg);
    let $htmlContent = '';

    for (let i = 0; i < cardsRandow.length; i++) {
        const card = cardsRandow[i];
        $htmlContent += CardFrontBack(card);
    }

    window.boardGame = {};

    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector('.board-game');
        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active')

        // arrow function que verifica se o src das imagens são iguais
        const compareCards = () => {
            if ($cardsActive.length === 2) {

                let src1
                for (let i = 0; i < $cardsActive.length; i++) {
                    const cardBack = $cardsActive[i].querySelector('.-back')
                    const imgBack = cardBack.querySelector('img')
                    const src = imgBack.getAttribute('src')

                    if (i === 0) {
                        src1 = src
                    } else {
                        if (src1 === src) {
                            return true
                        } else {
                            return false
                        }
                    }
                }
            }
        }

        // verifica se a função de compareCards é verdadeira, caso contrário muda o player e desvira as cartas
        if (compareCards() === true) {
            console.log('iguais')
        } else {
            const flipAndHideCards = () => {
                $cardsActive.forEach((card) => card.classList.remove('-active'));
            }

            const $arrowDown = document.querySelector('.arrow-down');
            if ($cardsActive.length == 2) {
                setTimeout(() => {
                    flipAndHideCards();
                    const currentPlayer = $arrowDown.getAttribute('data-currentplayer');
                    $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1);
                }, 1000)
            }
        }
    }

    return /*html*/`
    <section class="board-game" onClick="boardGame.handleClick()">
    ${$htmlContent}
    </section>
    `;
}

export default BoardGame;