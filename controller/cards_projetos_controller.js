
import { bd_cards_projetos } from "../model/cards_projetos_bd.js";

export function createCards(){
    let cards_section = document.getElementById("cards");

    bd_cards_projetos.map( (card_bd)=>{
        
    let card = document.createElement('div');
    card.className = 'card_projetos';

    let img_projetos = document.createElement('img');
    img_projetos.src = card_bd.img;

    img_projetos.className = 'img_projetos';

    let titulo = document.createElement('h1');
    titulo.textContent = card_bd.titulo;

    let preco = document.createElement('h3');
    preco.textContent = card_bd.preco;

    card.appendChild(img_projetos);
    card.appendChild(titulo); //

    card.appendChild(preco);

    cards_section.appendChild(card);
    });
    
};