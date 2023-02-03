import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import './style.css'

function ScoreBoard() {
    return `
    <header class="score-board">
        ${ArrowDown(2)}
        ${PlayerName("Player1")}
        ${PlayerScore(1)}
        <p>vs</p>
        ${PlayerScore(2)}
        ${PlayerName("Player2")}
    </header>
    `;
}

export default ScoreBoard;