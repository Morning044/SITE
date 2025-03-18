function alterarFonte(idElemento, acao) {
    let elemento = document.getElementById(idElemento);
    let estilo = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
    let tamanhoAtual = parseFloat(estilo);
    
    if (acao === 'aumentar') {
        elemento.style.fontSize = (tamanhoAtual + 2) + 'px';
    } else if (acao === 'diminuir') {
        elemento.style.fontSize = (tamanhoAtual - 2) + 'px';
    }
}

// Exemplo de uso:
// <p id="texto">Este é um texto.</p>
// <button onclick="alterarFonte('texto', 'aumentar')">Aumentar Fonte</button>
// <button onclick="alterarFonte('texto', 'diminuir')">Diminuir Fonte</button>
