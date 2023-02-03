import './style.css'

function PlayerScore(points = 0) {
    return /*html*/`
    <ol class="player-score" data-points= ${points}>
        <li class="pointer">ponto1</li>
        <li class="pointer">ponto2</li>
        <li class="pointer">ponto3</li>
    </ol>
    `;
}

export default PlayerScore;