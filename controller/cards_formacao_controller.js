let formacao = [
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
];

let curso = [
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
    {
        imagem: "fa-solid fa-image", titulo: "Formacao", sobretitulo: "tempo", paragrafo: "descrição da sua formação",
    },
];

function createCardsFormacao(){
    let cards_sectio_formacao = document.getElementById("cards_formacao");
    let cards_section_cursos = document.getElementById("cards_curso");

    for(let i = 0; i <formacao.length; i++){
    let formacao_imagem = document.createElement('div');
    formacao_imagem.className = 'img_formacao';

    let imagem = document.createElement('i');
    imagem.className = formacao[i].imagem; //vai passar em todas as (imagem) do vetor Usa Font Awesome pra mostrar o ícone

    let titulo = document.createElement('h1');
    titulo.className = formacao[i].titulo;

    let subtitulo = document.createElement('h4');
    subtitulo.className = formacao[i].sobretitulo;

    let paragrafo = document.createElement('p');
    paragrafo.className = formacao[i].paragrafo;

    // appendchild = adiciona os elementos dentro do card
        cards_sectio_formacao.appendChild(icone); //adiciona o icone dentro da secao cards_formacao
        cards_sectio_formacao.appendChild(titulo);
        cards_sectio_formacao.appendChild(subtitulo);
        cards_sectio_formacao.appendChild(paragrafo);
    }

}