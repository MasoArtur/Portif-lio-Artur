let titulos = ["titulo 1","titulo 1","titulo 1","titulo 1","titulo 1","titulo 1","titulo 1","titulo 1","titulo 1","titulo 1","titulo 1","titulo 1",];

let valor = ["R$ 25,00","R$ 25,00","R$ 25,00","R$ 25,00","R$ 25,00","R$ 25,00","R$ 25,00","R$ 25,00","R$ 25,00","R$ 25,00","R$ 25,00","R$ 25,00",];

export function createCards(){
    let cards_section = document.getElementById("cards");

    for(let i = 0; i < titulos.length; i++){let card = document.createElement('div');
    card.className = 'card';

    let titulo = document.createElement('h1');
    titulo.textContent = titulos[i];

    let preco = document.createElement('h3');
    preco.textContent = valor[i];

    card.appendChild(titulo);
    card.appendChild(preco);

    cards_section.appendChild(card);
    }
}