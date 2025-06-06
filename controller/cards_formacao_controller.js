import { bd_cards_formacao_formacao } from "./../model/cards_formacao_bd.js";
import { bd_cards_formacao_curso } from "./../model/cards_formacao_bd.js";
// let curso = [
//     {
//         imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
//     },
//     {
//         imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
//     },
//     {
//         imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
//     },
//     {
//         imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
//     },
//     {
//         imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
//     },
//     {
//         imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
//     },
//     {
//         imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
//     },
// ];

export function createCardsFormacao() {
    let cards_sectio_formacao = document.getElementById("cards_formacao");
    let cards_section_cursos = document.getElementById("cards_curso");

    bd_cards_formacao_formacao.map((card_formacao) => {

        let formacao_card = document.createElement('div'); //cria o card
        formacao_card.className = 'formacao_card'; //cria uma div com nome img_formacao

        let imagem = document.createElement('i');
        imagem.className = card_formacao.imagem; //vai passar em todas as (imagem) do vetor Usa Font Awesome pra mostrar o ícone

        let div_textos = document.createElement('div');
        div_textos.className = 'textos_formacao';

        let titulo = document.createElement('h1');
        titulo.textContent = card_formacao.titulo;

        let subtitulo = document.createElement('h4');
        subtitulo.textContent = card_formacao.sobretitulo;

        let paragrafo = document.createElement('p');
        paragrafo.textContent = card_formacao.paragrafo;

        // appendchild = adiciona os elementos dentro do card
        formacao_card.appendChild(imagem); //adiciona o icone dentro da secao cards_formacao
        div_textos.appendChild(titulo);
        div_textos.appendChild(subtitulo);
        div_textos.appendChild(paragrafo);
        formacao_card.appendChild(div_textos);
        // e por fim coloca o card inteiro dentro da seção;
        cards_sectio_formacao.appendChild(formacao_card);
    });

    bd_cards_formacao_curso.map((card_curso) => {

        let curso_card = document.createElement('div');
        curso_card.className = 'curso_card';

        let imagem_curso = document.createElement('i');
        imagem_curso.className = card_curso.imagem; //vai passar em todas as imagens do vetor 

        let div_textos_cursos = document.createElement('div');
        div_textos_cursos.className = 'textos_cursos';

        let titulo_curso = document.createElement('h1');
        titulo_curso.textContent = card_curso.titulo;

        let subtitulo_curso = document.createElement('h4');
        subtitulo_curso.textContent = card_curso.sobretitulo;

        let paragrafo_curso = document.createElement('p');
        paragrafo_curso.textContent = card_curso.paragrafo;

        // appendChild adiciona os elementos dentro do card
        curso_card.appendChild(imagem_curso);
        div_textos_cursos.appendChild(titulo_curso);
        div_textos_cursos.appendChild(subtitulo_curso);
        div_textos_cursos.appendChild(paragrafo_curso);
        curso_card.appendChild(div_textos_cursos);
        // e por fim coloca o card inteiro dentro da seção
        cards_section_cursos.appendChild(curso_card);
    });

}