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

    const srcImg = ["blair1", "blair1", "blair2", "blair2", "blair3", "blair3"];

    const cardsRandow = shuffleArray(srcImg);
    let $htmlContent = '';
    
    for (let i = 0; i < cardsRandow.length; i++) {
        const card = cardsRandow[i];
        $htmlContent += CardFrontBack(card);
    }

    return `
    <section class="board-game">
    ${$htmlContent}
    </section>
    `;
}

export default BoardGame;