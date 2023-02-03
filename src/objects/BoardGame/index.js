import './styles.css'
import CardFrontGameBack from '../../components/CardFrontBack';

function BoardGame(amountCards) {
    const $htmlCardFrontBack = CardFrontGameBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);
    
    return `
    <section class="board-game">
    ${$htmlContent}
    </section>
    `;
}

export default BoardGame;