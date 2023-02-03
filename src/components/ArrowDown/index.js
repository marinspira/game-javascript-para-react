import './style.css'

function ArrowDown(currentPlayer = 1) {
    return /*html*/`
    <img class="arrow-down" data-currentPlayer=${currentPlayer} src="images/arrowdown.png" alt="Ícone de seta">
    `
}

export default ArrowDown